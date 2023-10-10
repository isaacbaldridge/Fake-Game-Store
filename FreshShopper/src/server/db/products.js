const db = require("./client")


const createProduct = async( { name, category, description, price, nutritionalInfo, quantity, image} ) => {
    try {
        const { rows: [ product ] } = await db.query(`
        INSERT INTO users (name, category, description, price, nutritionalInfo, quantity, image)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `, [name, category, description, price, nutritionalInfo, quantity, image])
        return product
    } catch (error) {
        throw error
    }
}


module.exports = {
    createProduct
}