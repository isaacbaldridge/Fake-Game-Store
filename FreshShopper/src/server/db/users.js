const db = require("./client")
const chalk = require("chalk")
const bcrypt = require("bcrypt")
const SALT_ROUNDS = 13

const createUser = async( { name, email, password, address, profilePic, isAdmin } ) => {

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    try {
        const { rows: [ user ] } = await db.query(`
        INSERT INTO users (name, email, password, address, profilePic, isAdmin)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
        `, [name, email, hashedPassword, address, profilePic, isAdmin])
        return user
    } catch (error) {
        console.error(chalk.red("Error creating user: "), error)
    }
}

const logIn = async ( { email, password } ) => {
  try {
    // does this user exist?
    const { rows: [ user ] } = await db.query(`
    SELECT *
    FROM users
    WHERE email = $1
    `, [email])

    console.log(chalk.blue("Checking LogIn user: "), user)
    if (!user) {
      throw new Error("Email does not exist.")
    }

    const compare = await bcrypt.compare(password, user.password)
    if (compare) {
      console.log(chalk.yellow("Email and passwords match!"))
      return user
    } else {
      throw new Error("Passwords do not match.")
    }


  } catch (error) {
    console.error (chalk.red("Error checking login db: ", error))
    throw error
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
        console.error(chalk.red("Error getting all users: "), error)
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

async function getUserByEmail(email) {
  try {
    const { rows: [ user ] } = await db.query(`
      SELECT *
      FROM users
      WHERE email = $1
    `, [email]);

  return user;
} catch (error) {
  throw error;
}
}



module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    logIn
}