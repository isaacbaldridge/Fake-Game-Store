const db = require("./client")
const bcrypt = require("bcrypt")
const SALT_COUNT = 10

const createUser = async( { name, email, password, address, profilePic, isAdmin} ) => {
    try {
        const { rows: [ user ] } = await db.query(`
        INSERT INTO users (name, email, password, address, profilePic, isAdmin)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
        `, [name, email, password, address, profilePic, isAdmin])
        return user
    } catch (error) {
        console.error("Error creating user: ", error)
    }
}

const getAllUsers = async () => {
    try {
        const { rows } = await db.query (`
        SELECT * 
        FROM users
        `)
        return rows
    } catch (error) {
        console.error("Error getting all users: ", error)
    }
}

async function getUserById(userId) {
    try {
      const { rows: [ user ] } = await db.query(`
        SELECT *
        FROM users
        WHERE id=${userId}
      `);
  
      if (!user) {
        throw {
          name: "UserNotFoundError",
          message: "A user with that id does not exist"
        }
      }

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById
}