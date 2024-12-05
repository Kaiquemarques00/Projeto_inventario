import db from "../config/db.js";

class CategoriesController {
    async consultCategories(req, res) {
        try {
            const consultCategories = await db.query("SELECT * FROM categorias ORDER BY id ASC");
            const categories = consultCategories.rows;

            if (categories.length === 0) return res.status(404).json("Nenhuma categoria encontrada");

            res.status(200).json(categories);
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar no banco de dados");
        }
    }

    async consultCategory(req, res) {
        const id = req.params.id;

        try {
            const consultCategory = await db.query("SELECT * FROM categorias WHERE id = $1", [id]);
            const category = consultCategory.rows;

            if (category.length === 0) return res.status(404).json("Categoria não encontrada");

            res.status(200).json(category);
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar no banco de dados");
        }
    }

    async createCategory(req, res) {
        const { name } = req.body;

        if (!name) return res.status(422).json("Nome da categoria deve ser preenchido");
        if (typeof name !== 'string') return res.status(422).json("O campo de nome da categoria deve ser um texto");

        try {
            const consultCategoryExists = await db.query("SELECT * FROM categorias WHERE nome_categoria = $1", [name]);
            if (consultCategoryExists.rows.length > 0) return res.status(400).json("Categoria já criada");

            await db.query("INSERT INTO categorias (nome_categoria) VALUES ($1)", [name]);

            res.status(201).json("Categoria criada com sucesso");
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar no banco de dados");
        }
    }
}

export default CategoriesController;