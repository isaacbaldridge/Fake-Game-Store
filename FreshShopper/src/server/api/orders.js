const express = require("express")
const ordersRouter = express.Router()

const {
    getAllOrders
} = require("../db/orders")


// /api/orders/
ordersRouter.get("/", async (req, res, next) => {
    try {
        console.log("In order route:")
        const orders = await getAllOrders()
        res.send(orders)
    } catch({name, message}) {
        next({name, message})
    }
})

module.exports = ordersRouter