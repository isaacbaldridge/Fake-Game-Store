const db = require("./client")
const chalk = require("chalk")


const createOrder = async( { user_id, fulfilled } ) => {
    try {
        const { rows: [ order ] } = await db.query(`
        INSERT INTO orders (user_id, fulfilled)
        VALUES($1, $2)
        RETURNING *
        `, [user_id, fulfilled])
        return order
    } catch (error) {
        console.error(chalk.red("Error creating order: "), error)
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
        console.error(chalk.red("Error SELECTING all orders: "), error)
    }
}

const getOrderById = async (id) => {
    try {
        const { rows: [ order ] } = await db.query(`
        SELECT *
        FROM orders
        WHERE id = $1
        `, [id])
        return order
    } catch (error) {
        console.error(chalk.red("error SELECTING order by Id: "), error)
    }
}

const getOrdersByUserId = async (userId) => {
    try {
        const { rows } = await db.query(`
        SELECT *
        FROM orders
        WHERE user_id = $1
        `, [userId])
        return rows
    } catch (error) {
        console.error(chalk.red("Error SELECTING orders by user Id: "), error)
    }
}


module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrdersByUserId
}