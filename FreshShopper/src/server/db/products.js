const db = require("./client")


const createProduct = async( { name, category, description, price, nutritionalInfo, quantity, image} ) => {
    try {
        const { rows: [ product ] } = await db.query(`
        INSERT INTO products (name, category, description, price, nutritionalInfo, quantity, image)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `, [name, category, description, price, nutritionalInfo, quantity, image])
        return product
    } catch (error) {
        console.error("Error creating product: ", error)
    }
}

// GET/SELECT SQL queries

const getAllProducts = async () => {
    try {
        const { rows } = await db.query (`
        SELECT *
        FROM products
        `)
        return rows
    } catch (error) {
        console.error("Error selecting all products: ", error)
    }
}

const getProductsByCategory = async (category) => {
    try {
        const { rows } = await db.query (`
        SELECT *
        FROM products
        WHERE category = $1
        `, [category])
        return rows
    } catch (error) {
        console.error("Error SELECTING products by category: ", error)
    }
}

const getProductById = async (id) => {
    try {
        const { rows: [product] } = await db.query(`
        SELECT *
        FROM products
        WHERE id = $1
        `, [id])
        return product
    } catch (error) {
        console.error("Error SELECTING product by Id: ", error)
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductsByCategory,
    getProductById
}