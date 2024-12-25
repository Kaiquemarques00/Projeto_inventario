
# API

A API Rest desenvolvida funciona como o Back-end da aplicação, foi desenvolvida principalmente com Express e funciona totalmente local em conjunto com o banco de dados 
postgres, a API é responsável por todas as operações CRUD no banco de dados, além de cumprir validações e enviar mensagens de erros e de conclusões ou dados ao front-end, 
ainda sobre as funcionalidades, inicialmente são 3 áreas afetadas diretamente, sendo elas a parte de produtos, categorias e movimentações, onde as funcionalidades são, consulta, criação, 
alteração e deleção, algumas funcionalidades tem sub-funcionalidades, como por exemplo, a funcionalidade de cadastro de movimentações faz um calculado na quantidade de produtos e altera 
diretamente os dados do produto.

A API é desenvolvida encima do protocolo HTTP, e basicamente o CRUD no banco de dados são de fácil entendimento junto dos métodos HTTP, sendo eles:
- GET
- POST
- PATCH
- DELETE

## Exemplo

Um exemplo de uma funcionalidade sendo usada abaixo:

### Retorna todos os produtos

```http
  GET /APIURL/products
```

### Retorna um produto

```http
  GET /APIURL/product/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer |

### Cria um novo produto

```http
  POST /APIURL/product
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do produto que você quer criar |
| `description`      | `string` | **Obrigatório**. A descrição do produto que você quer criar |
| `amount`      | `number` | **Obrigatório**. A quantidade do produto que você quer criar |
| `price`      | `number` | **Obrigatório**. O preço do produto que você quer criar |
| `category_id`      | `number` | **Obrigatório**. O id da categoria do produto que você quer criar |

### Altera um registro de usuário

```http
  PATCH /APIURL/product/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto que você quer alterar |
| `name`      | `string` | **Obrigatório**. O nome do produto que você quer alterar |
| `description`      | `string` | **Obrigatório**. A descrição do produto que você quer alterar |
| `amount`      | `number` | **Obrigatório**. A quantidade do produto que você quer alterar |
| `price`      | `number` | **Obrigatório**. O preço do produto que você quer alterar |
| `category_id`      | `number` | **Obrigatório**. O id da categoria do produto que você quer alterar |

### Deleta um usuário

```http
  DELETE /APIURL/product/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto que você quer deletar |