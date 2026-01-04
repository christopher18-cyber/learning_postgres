import { query } from "../database/db.js";

export async function createUsersTable() {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `

    const createRecipeTable = `
    CREATE TABLE IF NOT EXISTS recipes(
    id SERIAL PRIMARY KEY,
    foodname VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `

    try {
        await query(createTableQuery)
        console.log("User table created successfully.");

    } catch (err) {
        console.error("Error while creatig user table", err);

    }

}

export async function insertUser(username, email) {
    const insertUserQuery = `
    INSERT INTO users (username,email)
    VALUES ($1,$2)
    RETURNING *
    `

    try {
        const res = await query(insertUserQuery, [username, email])
        console.log("User inserted successfully", res.rows[0]);
        return res.rows[0]

    }
    catch (err) {
        console.error("Error while creating table.", err);

    }
}

export async function fetchAllUsers() {
    const getAllUsersFromUsersTable = `SELECT * FROM users`

    try {
        const res = await query(getAllUsersFromUsersTable)
        console.log("Feched all users.");

        return res.rows

    }
    catch (err) {
        console.error("Error", err)
    }
}

export async function updateUserInfo(username, newEmail) {
    const updateUserQuery = `
    UPDATE users
    SET email = $2
    WHERE username = $1
    RETURNING *
    `

    try {
        const res = query(updateUserQuery, [username, newEmail])

        if (res.rows.length > 0) {
            console.log("User updated successfully", res.rows[0]);
            return res.rows[0]
        } else {
            console.log("No user found with given username");
            return null

        }


    }
    catch (err) {
        console.error("Error while updating table", err);
    }
}

export async function deleteInfo(username) {
    const deleteQuery = `
    DELETE FROM users
    WHERE username = $1
    RETURNING *
    `
    try {
        const res = await query(deleteQuery, [username])


        if (res.rows.length > 0) {
            console.log("User deleeted successfully", res.rows[0]);
            return res.rows[0]
        } else {
            console.log("No user found with given username");
            return null
        }

    }
    catch (err) { }
}