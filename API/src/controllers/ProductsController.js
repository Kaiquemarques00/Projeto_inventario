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
}

export default ProductsController;