const db = require("./client")
const chalk = require("chalk")


const createOrder = async( { user_id } ) => {
    try {
        const { rows: [ order ] } = await db.query(`
        INSERT INTO orders (user_id)
        VALUES($1)
        RETURNING *
        `, [user_id])
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

const updateOrder = async (id, fields = {}) => {
    const setString = Object.keys(fields).map(
        (key, index) => `"${key}"=$${index + 1}`
    ).join(', ');

    console.log(chalk.yellow("setString: ", setString))

    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }

    try {
        const { rows: [order] } = await db.query(`
        UPDATE orders
        SET ${ setString }
        WHERE id=${ id }
        RETURNING *;
        `, Object.values(fields));
        return order;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrdersByUserId,
    updateOrder
}