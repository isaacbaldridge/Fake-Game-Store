const db = require("./client")


const createUser = async( { name, email, password, address, profilePic, isAdmin} ) => {
    try {
        const { rows: [ user ] } = await db.query(`
        INSERT INTO users (name, email, password, address, profilePic, isAdmin)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
        `, [name, email, password, address, profilePic, isAdmin])
        return user
    } catch (error) {
        throw error
    }
}


module.exports = {
    createUser
}