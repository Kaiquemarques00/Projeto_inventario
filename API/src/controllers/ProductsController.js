import db from "../config/db.js";

class ProductsController {
    async consultProducts(req, res) {
        try {
            const consultProducts = await db.query(`
                    SELECT produtos.id, nome, descricao, quantidade, preco, nome_categoria AS categoria
                    FROM produtos
                    INNER JOIN categorias ON produtos.categoria_id = categorias.id
                    ORDER BY produtos.id ASC                               
                `);
            const products = consultProducts.rows;

            if (products.length === 0) return req.status(404).json("Nenhum produto encontrado");


            res.status(200).json(products);
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar ao banco de dados");
        }
    }

    async consultProduct(req, res) {
        const id = req.params.id;

        try {
            const consultProduct = await db.query("SELECT * FROM produtos WHERE id = $1 ORDER BY id ASC", [id]);
            const product = consultProduct.rows;

            if (product.length === 0) return res.status(404).json("Produto não encontrado");

            res.status(200).json({products: product, message: "Está funcionando a rota de consulta"});
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar ao banco de dados");
        }
    }

    async createProduct(req, res) {
        const { name, description, amount, price, category_id } = req.body;

        if (!name) return res.status(422).json("Nome do produto deve ser preenchido");
        if (typeof name !== "string") return res.status(422).json("O campo nome do produto deve ser um texto");

        if (!description) return res.status(422).json("Descrição do produto deve ser preenchida");
        if (typeof description !== "string") return res.status(422).json("O campo descrição do produto deve ser um texto");

        if (!amount) return res.status(422).json("Quantidade do produto deve ser preenchida");
        if (typeof amount !== "number") return res.status(422).json("O campo quantidade do produto deve ser um número");

        if (!price) return res.status(422).json("Preço do produto deve ser preenchida");
        if (typeof price !== "number") return res.status(422).json("O campo preço do produto deve ser um número");

        if (!category_id) return res.status(422).json("ID da categoria deve ser preenchida");
        if (typeof category_id !== "number") return res.status(422).json("O campo ID da categoria deve ser um número");

        try {
            const consultCategory = await db.query("SELECT * FROM categorias WHERE id = $1", [category_id]);
            const category = consultCategory.rows;

            if (category.length === 0) return res.status(404).json("Categoria selecionada não existe");

            await db.query("INSERT INTO produtos(nome, descricao, quantidade, preco, categoria_id) VALUES ($1, $2, $3, $4, $5)", [name, description, amount, price, category_id]);
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar ao banco de dados");
        }

        return res.status(201).json("Produto criado com sucesso");
    }
}

export default ProductsController;