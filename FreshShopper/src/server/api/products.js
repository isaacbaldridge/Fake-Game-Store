const express = require("express")
const productsRouter = express.Router()

const {
    getAllProducts
} = require("../db/products")


// /api/products/
productsRouter.get("/", async (req, res, next) => {
    try {
        console.log("In product route:")
        const products = await getAllProducts()
        res.send(products)
    } catch({name, message}) {
        next({name, message})
    }
})

module.exports = productsRouter