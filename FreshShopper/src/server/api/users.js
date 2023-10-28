const express = require("express")
const usersRouter = express.Router()
const chalk = require("chalk")
const morgan = require("morgan")
const jwt = require("jsonwebtoken")

// ---- Loggin middleware ---- //
usersRouter.use(morgan("tiny"))


const {
    createUser,
    getAllUsers,
    getUserByEmail,
    logIn
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
        const existingUser = await getUserByEmail(email)
        if (existingUser) {
            return res.send("A user with this email already exists.")
        }
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
            const token = jwt.sign({
                id: user.id,
                email
            }, process.env.JWT_SECRET, {
                expiresIn: '1w'
            });
            res.send( { 
                message: "Register successful!",
                user,
                token
             } )
        }

    } catch ({name, message}) {
        next({name, message})
    }
})

// /api/users/login
usersRouter.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.send("Missing name, email, and/or password")
        }

        const user = await logIn( { email, password } )
        if (user) {

            const token = jwt.sign({
                id: user.id,
                email
            }, process.env.JWT_SECRET, {
                expiresIn: '1w'
            });

            res.send({
                message: "Login Successful!",
                user,
                token
            })
        }

    } catch (error) {
        // console.log(error.message)
        res.send(error.message)
    }
})

module.exports = usersRouter