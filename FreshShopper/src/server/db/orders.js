const db = require("./client")


const createOrder = async( { user_id, fulfilled } ) => {
    try {
        const { rows: [ order ] } = await db.query(`
        INSERT INTO orders (user_id, fulfilled)
        VALUES($1, $2)
        RETURNING *
        `, [user_id, fulfilled])
        return order
    } catch (error) {
        console.error("Error creating order: ", error)
    }
}

const getAllOrders = async () => {
    try {
        const {rows} = await db.query(`
        SELECT *
        FROM orders
        `)
        return rows
    } catch (error) {
        console.error("Error SELECTING all orders: ", error)
    }
}

module.exports = {
    createOrder,
    getAllOrders
}