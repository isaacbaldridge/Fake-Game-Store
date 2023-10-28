const express = require("express")
const usersRouter = express.Router()
const chalk = require("chalk")
const morgan = require("morgan")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = process.env

// ---- Loggin middleware ---- //
usersRouter.use(morgan("tiny"))

const {requireUser} = require("./utils")

const {
    createUser,
    getAllUsers,
    getUserByEmail,
    logIn,
    deleteUserById,
    updateUserById
} = require("../db/users")

// ---- GET ALL USERS ---- //
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

// ---- USER REGISTER ---- //
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
            }, JWT_SECRET, {
                expiresIn: '1w'
            });
            res.send( { 
                message: "Register successful!",
                token
             } )
        }

    } catch ({name, message}) {
        next({name, message})
    }
})

// ---- USER LOGIN ---- //
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
                user
            }, JWT_SECRET, {
                expiresIn: '1w'
            });

            res.send({
                message: "Login Successful!",
                token
            })
        }

    } catch (error) {
        // console.log(error.message)
        res.send(error.message)
    }
})

// ---- RETRIEVE LOGGED IN USER INFORMATION ----//
// /api/users/me
usersRouter.get("/me", async (req, res) => {
    const token = req.headers.authorization
    console.log(chalk.yellow("Token: ", token))
    newToken = token.split(" ")[1]
    console.log(chalk.green("newToken:", newToken))

    try {
        if (!token) {
            return res.send("Bad token.")
        }
        // console.log(chalk.yellow("Testing..."))
        const user = jwt.verify(newToken, JWT_SECRET)
        res.send( {
            message: "Profile information retrieved!",
            ...user
        })
    } catch (error) {
        console.error(chalk.red("Error retrieving /me user information: "), error)
        throw error
    }
})

//  ---- UPDATE USER INFORMATION ---- //
// /api/users/:id
usersRouter.patch("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const updatedUser = await updateUserById(id, req.body)
        res.send(updatedUser)
    } catch (error) {
        console.error(chalk.red("Error updating user information API: ", error))
        throw error
    }
})

// ---- DELETE USER ---- //
// /api/users/:id
usersRouter.delete("/:id", async (req, res) => {
    const { id } = req.params
    // console.log("ID: ", id)
    try {
        const deletedUser = await deleteUserById(id)
        res.send(deletedUser)
    } catch (error) {
        console.error(chalk.red("Error deleting user from DB: ", error))
        throw error
    }
})

module.exports = usersRouter