import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"

const schema = buildSchema(`
    type Product {
        id: ID!
        title: String
        price: Float
        description: String
        thumbnail: String
        timestamp: String
        code: String
        stock: Int
        qty: Int
    }
    input ProductInput {
        title: String
        price: Float
        description: String
        thumbnail: String
        timestamp: String
        code: String
        stock: Int
        qty: Int
    }
    type Query {
        getProduct(id: ID!): Product
        getProducts(campo: String, valor: String): [Product]
    }
    type Mutation {
        createProduct(datos: ProductInput): Product
        updateProduct(id: ID!, datos: ProductInput): Product
        deleteProduct(id: ID!): Product
    }
`)

export { schema }