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
        console.error("Error getting products by category: ", error)
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductsByCategory
}