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

    async changeProduct(req, res) {
        // Chaves que vem do Req body sendo convertidas a formato do banco de dados
        const columnMap = {
            name: 'nome',
            description: 'descricao',
            amount: 'quantidade',
            price: 'preco',
            category_id: 'categoria_id'
        };

        const id = req.params.id;
        const changeData = req.body;

        try {
            // Verifica se há dados para serem alterados
            if (!Object.keys(changeData).length) return res.status(422).json("Nenhum campo para ser alterado");

            // Verifica o tipo dos campos a serem alterados
            if (changeData.name) if (typeof changeData.name !== "string") return res.status(422).json("O campo nome deve ser um texto");
            if (changeData.description) if (typeof changeData.description !== "string") return res.status(422).json("O campo descrição deve ser um texto");
            if (changeData.amount) if (typeof changeData.amount !== "number") return res.status(422).json("O campo quantidade deve ser um número");
            if (changeData.price) if (typeof changeData.price !== "number") return res.status(422).json("O campo preço deve ser um número");
            if (changeData.category_id) if (typeof changeData.category_id !== "number") return res.status(422).json("O campo categoria ID deve ser um número");

            // Formata os dados do req body para terem as chaves igual a do banco de dados com método reduce que cria um novo objeto
            const mappedChanges = Object.keys(changeData).reduce((acc, key) => {
                if (columnMap[key]) {
                acc[columnMap[key]] = changeData[key];
                }
            
                return acc;
            }, {});

            // Verifica se os dados enviados batem com a estrutura das colunas do bd
            if (!Object.keys(mappedChanges).length) {
                return res.status(422).json("Nenhum campo válido enviado");
            };

            // Formata os dados a serem alterados de acordo com o que foi alterado, é a parte de inserção de valores numa query por exemplo
            const setClause = Object.keys(mappedChanges)
                .map((key, index) => `${key} = $${index + 1}`)
                .join(', ');

            // Pega apenas os valores dos itens a serem alterados
            const values = Object.values(mappedChanges);

            // Coloca o id no array que atualiza o produto
            values.push(id);
            
            // Query que atualiza o produto no banco de dados, utilizando a clausula criada acima e pegando o ultimo elemento do array que itens alterados que é o ID
            const changeProduct = await db.query(
                `
                    UPDATE produtos
                    SET ${setClause}
                    WHERE id = $${values.length}
                    RETURNING *
                `, values);

            if (changeProduct.rows.length === 0) return res.status(404).json("Produto não encontrado");

            res.status(200).json("Produto alterado com sucesso");
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar com banco de dados");
        }
        
    }

    async deleteProduct(req,res) {
        const id = req.params.id;

        try {
            const deleteProduct = await db.query("DELETE FROM produtos WHERE id = $1 RETURNING *", [id]);

            if (deleteProduct.rows.length === 0) return res.status(404).json("Produto não encontrado");

            res.status(200).json("Produto deletado com sucesso");
        } catch (error) {
            console.log(error);
            res.status(400).json("Erro ao conectar no banco de dados");
        }
    }
}

export default ProductsController;