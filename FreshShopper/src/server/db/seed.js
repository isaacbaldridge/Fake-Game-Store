const db = require("./client")
const chalk = require("chalk")
const { createUser } = require("./users")
const { createProduct } = require("./products")
const { createOrder } = require("./orders")
const { createOrderProduct } = require("./order_products")
const { users, products, orders, order_products } = require("./seedData")

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS order_products;
        `)
        await db.query(`
        DROP TABLE IF EXISTS orders;
        `)
        await db.query(`
        DROP TABLE IF EXISTS users;
        `)
        await db.query(`
        DROP TABLE IF EXISTS products;
        `)
        console.log(chalk.green("Successfully dropped all tables."))
    } catch (error) {
        console.error(chalk.red("Error dropping users table: "), error)
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
            address JSON,
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
            nutritionalInfo JSON,
            quantity INTEGER,
            image TEXT[]
        )`)

        await db.query(`
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            fulfilled BOOLEAN
        )`)

        await db.query(`
        CREATE TABLE order_products (
            order_id INTEGER REFERENCES orders(id),
            product_id INTEGER REFERENCES products(id),
            quantity INTEGER
        )
        `)
        console.log(chalk.green("Successfully created tables."))
    } catch (error) {
        console.error(chalk.red("Error creating tables: "), error)
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
        console.log(chalk.green("Successfully inserted user data."))
    } catch (error) {
        console.error(chalk.red("Error inserting user seed data: "), error)
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
        console.log(chalk.green("Successfully inserted products seed data."))
    } catch (error) {
        console.error(chalk.red("Error inserting products seed data: "), error)
    }
}

const insertOrders = async () => {
    try {
        for (const order of orders) {
            await createOrder (
                {
                    user_id: order.user_id,
                    fulfilled: order.fulfilled
                }
            )
        }
    } catch (error) {
        console.error(chalk.red("Error inserting orders seed data: "), error)
    }
}

const insertOrderProducts = async () => {
    try {
        for (const order_product of order_products) {
            await createOrderProduct (
                {
                    order_id: order_product.order_id,
                    product_id: order_product.product_id,
                    quantity: order_product.quantity
                }
            )
        }
    } catch (error) {
        console.error(chalk.red("Error inserting order_product seed data: "), error)
    }
}

const seedDatabase = async () => {
    try {
        db.connect()
        await dropTables()
        await createTables()
        await insertUsers()
        await insertProducts()
        await insertOrders()
        await insertOrderProducts()
    } catch (error) {
        console.error("Error seeding database: ", error)
    } finally {
        db.end()
    }
}

seedDatabase()