import db from "../config/db.js";

class MovimentacaoController {
    async consultMovements(req, res) {
        try {
            const consultMovements = await db.query(`SELECT movimentacoes.id, produto_id, nome, tipo, movimentacoes.quantidade, data FROM movimentacoes
                                                        INNER JOIN produtos ON movimentacoes.id = produtos.id
                                                        ORDER BY movimentacoes.id ASC
                                                    `);
            const movements = consultMovements.rows;

            if (movements.length === 0) return res.status(404).json("Nenhuma movimentação encontrada");

            res.status(200).json(movements);
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar com o banco de dados");
        }
    }

    async createMovement(req, res) {
        const { product_id, type, amount } = req.body;
        const typeFormat = type.charAt(0).toUpperCase() + type.slice(1);

        if (!product_id) return res.status(422).json("ID do produto movimentado deve ser preenchido");
        if (!type) return res.status(422).json("Tipo de movimentação deve ser preenchida");
        if (!amount) return res.status(422).json("Quantidade movimentada deve ser preenchida");

        if (!['Entrada', 'Saida'].includes(typeFormat)) return res.status(422).json("Tipo de movimentação deve ser entrada ou saida");

        try {
            const consultProduct = await db.query("SELECT quantidade FROM produtos WHERE id = $1", [product_id]);
            const product = consultProduct.rows;

            if (product.length === 0) return res.status(404).json("Nenhum produto encontrado");
            

            const productAmount = product[0].quantidade;
            console.log(productAmount);
            let newAmount;

            if (typeFormat === "Entrada") newAmount = productAmount + amount;
            else if (typeFormat === "Saida") {
                if (productAmount < amount) return res.status(422).json("Quantidade insuficiente no estoque");
                newAmount = productAmount - amount;
            }

            await db.query("UPDATE produtos SET quantidade = $1 WHERE id = $2", [newAmount, product_id]);

            await db.query("INSERT INTO movimentacoes(produto_id, tipo, quantidade) VALUES ($1, $2, $3)", [product_id, typeFormat, amount]);

            res.status(201).json("Movimentação feita com sucesso");
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar no banco de dados");
        }
    }
}

export default MovimentacaoController;