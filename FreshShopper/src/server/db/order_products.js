const db = require("./client")


const createOrderProduct = async( { order_id, product_id, quantity} ) => {
    try {
        const { rows: [ order_product ] } = await db.query(`
        INSERT INTO order_products (order_id, product_id, quantity)
        VALUES($1, $2, $3)
        RETURNING *
        `, [order_id, product_id, quantity])
        return order_product
    } catch (error) {
        console.error("Error creating order_product: ", error)
    }
}


module.exports = {
    createOrderProduct
}