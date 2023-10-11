const express = require("express")
const orderProductsRouter = express.Router()

const {
    getAllOrderProducts
} = require("../db/order_products")


// /api/order_products/
orderProductsRouter.get("/", async (req, res, next) => {
    try {
        console.log("In order_products route:")
        const order_products = await getAllOrderProducts()
        res.send(order_products)
    } catch({name, message}) {
        next({name, message})
    }
})

module.exports = orderProductsRouter