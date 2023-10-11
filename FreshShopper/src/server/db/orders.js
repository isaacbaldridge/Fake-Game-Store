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


module.exports = {
    createOrder
}