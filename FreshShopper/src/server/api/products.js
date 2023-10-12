const express = require("express")
const productsRouter = express.Router()

const {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    deleteProductById,
    createProduct,
    updateProductById
} = require("../db/products")



// GET REQUESTS

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

// /api/products/:category
productsRouter.get("/category/:category", async (req, res, next) => {
    const { category } = req.params
    try {
        const products = await getProductsByCategory(category)
        res.send(products)
    } catch ({name, message}) {
        next({name, message})
    }
})

// /api/products/:id
productsRouter.get("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await getProductById(id)
        res.send(product)
    } catch ({name, message}) {
        next({name, message})
    }
})



// DELETE request

// /api/products/:id
productsRouter.delete("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await deleteProductById(id)
        res.send(product)
    } catch ({name, message}) {
        next({name, message})
    }
})


// POST request

// /api/products
productsRouter.post("/", async (req, res, next) => {
    const {
        name,
        category,
        description,
        price,
        nutritionalInfo,
        quantity,
        image
    } = req.body

    const productData = {}
    try {
        productData.name = name
        productData.category = category
        productData.description = description
        productData.price = price
        productData.nutritionalInfo = nutritionalInfo
        productData.quantity = quantity
        productData.image = image
        const newProduct = await createProduct(productData)
        res.send(newProduct)
    } catch({name, message}) {
        next({name, message})
    }
})


// PATCH request

// /api/products/:id
productsRouter.patch(`/:id`,async(req, res, next)=>{
    try {
      const updateProduct = await updateProductById(req.params.id, req.body)
      res.send(updateProduct)
    } catch ({name, message}) {
      next ({name, message})
    }
})

module.exports = productsRouter