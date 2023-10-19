const express = require("express")
const usersRouter = express.Router()
const chalk = require("chalk")
const morgan = require("morgan")

// ---- Loggin middleware ---- //
usersRouter.use(morgan("tiny"))


const {
    createUser,
    getAllUsers
} = require("../db/users")


// /api/users/
usersRouter.get("/", async (req, res, next) => {
    try {
        console.log("In user route:")
        const users = await getAllUsers()
        res.send(users)
    } catch({name, message}) {
        next({name, message})
    }
})

// /api/users/register
usersRouter.post("/register", async (req, res, next) => {
    const { name, email, password, address, profilepic } = req.body
    try {
        if (!name || !email || !password) {
            return res.status(401).send("Missing name, email, and/or password")
        }

        const user = await createUser({
            name,
            email,
            password,
            address,
            profilepic 
        })

        if (user) {
            res.send(user)
        }

    } catch ({name, message}) {
        next({name, message})
    }
})

module.exports = usersRouter