import db from "../config/db.js";

class ProductsController {
    async consultProducts(req, res) {
        try {
            const consultProducts = await db.query("SELECT * FROM produtos ORDER BY id ASC");
            const products = consultProducts.rows;

            res.status(200).json({products: products, message: "Está funcionando a rota de consulta"});
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
        const { nome, descricao, quantidade, preco, categoria_id } = req.body;

        if (!nome) return res.status(422).json("Nome do produto deve ser preenchido");
        if (typeof nome !== "string") return res.status(422).json("O campo nome deve ser um texto");

        if (!descricao) return res.status(422).json("Descrição do produto deve ser preenchida");
        if (typeof descricao !== "string") return res.status(422).json("O campo descrição deve ser um texto");

        if (!quantidade) return res.status(422).json("Quantidade do produto deve ser preenchida");
        if (typeof quantidade !== "number") return res.status(422).json("O campo quantidade deve ser um número");

        if (!preco) return res.status(422).json("Preço do produto deve ser preenchida");
        if (typeof preco !== "number") return res.status(422).json("O campo preço deve ser um número");

        if (!categoria_id) return res.status(422).json("Preço do produto deve ser preenchida");
        if (typeof categoria_id !== "number") return res.status(422).json("O campo preço deve ser um número");

        try {
            const consultCategory = await db.query("SELECT * FROM categorias WHERE id = $1", [categoria_id]);
            const category = consultCategory.rows;

            if (category.length === 0) return res.status(404).json("Categoria selecionada não existe");

            await db.query("INSERT INTO produtos(nome, descricao, quantidade, preco, categoria_id) VALUES ($1, $2, $3, $4, $5)", [nome, descricao, quantidade, preco, categoria_id]);
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar ao banco de dados");
        }

        return res.status(200).json("Produto criado com sucesso");
    }
}

export default ProductsController;