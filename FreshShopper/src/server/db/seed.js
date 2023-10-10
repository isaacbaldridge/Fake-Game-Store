const db = require("./client")
const { users, products, orders, order_products } = require("./seedData")

const createTables = async () => {
    try {
        await db.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) DEFAULT 'name',
            email VARCHAR(255) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            address TEXT,
            profilePic TEXT,
            isAdmin BOOLEAN DEFAULT false
        )`)
    } catch (error) {
        throw error
    }
}

const seedDatabase = async () => {
    try {
        db.connect()
        await createTables()
    } catch (error) {
        throw error
    } finally {
        db.end()
    }
}

seedDatabase()