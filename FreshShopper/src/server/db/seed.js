const db = require("./client")
const { createUser } = require("./users")
const { createProduct } = require("./products")
const { users, products, orders, order_products } = require("./seedData")

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS users;
        `)
        await db.query(`
        DROP TABLE IF EXISTS products;
        `)
    } catch (error) {
        console.error("Error dropping users table: ", error)
    }
}

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

        await db.query(`
        CREATE TABLE products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            category VARCHAR(30),
            description TEXT,
            price DECIMAL,
            nutritionalInfo TEXT,
            quantity INTEGER,
            image TEXT
        )`)
        console.log("Successfully created users table.")
    } catch (error) {
        console.error("Error creating users table: ", error)
    }
}

const insertUsers = async () => {
    try {
        for (const user of users) {
            await createUser (
                {
                    name: user.name, 
                    email: user.email,
                    password: user.password,
                    address: user.address,
                    profilePic: user.profilePic,
                    isAdmin: user.isAdmin
                }
            )
        }
        console.log("Successfully inserted user data.")
    } catch (error) {
        console.error("Error inserting user seed data: ", error)
    }
}

const insertProducts = async () => {
    try {
        for (const product of products) {
            await createProduct(
                {
                    name: product.name,
                    category: product.category,
                    description: product.description,
                    price: product.price,
                    nutritionalInfo: product.nutritionalInfo,
                    quantity: product.quantity,
                    image: product.image
                }
            )
        }
        console.log("Successfully inserted products seed data.")
    } catch (error) {
        console.error("Error inserting products seed data: ", error)
    }
}

const seedDatabase = async () => {
    try {
        db.connect()
        await dropTables()
        await createTables()
        await insertUsers()
        await insertProducts()
    } catch (error) {
        throw error
    } finally {
        db.end()
    }
}

seedDatabase()