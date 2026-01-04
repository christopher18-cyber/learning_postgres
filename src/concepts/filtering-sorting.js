import * as db from "../database/db.js";

export async function getUsersWhere(condition) {
    const getUserQuery = `
    SELECT * FROM users
    WHERE ${condition}
    `

    try {
        const res = await db.query(getUserQuery)
        return res.rows
    }
    catch (err) {
        console.error(err);

    }
}

export async function getSortedUsers(column, order = "ASC") {
    const getSortedUsersQuery = `
    SELECT * FROM users
    ORDER BY ${column} ${order}
    `
    try {
        const result = await db.query(getSortedUsersQuery)

        return result.rows
    }
    catch (err) {
        console.error("Error", err);

    }
}

export async function getPaginatedUser(limit, offset) {
    const getPaginatedQuery = `
    SELECT * FROM users
    LIMIT $1 OFFSET $2
    `
    try {
        const result = await db.query(getPaginatedQuery, [limit, offset])

        return result.rows
    }
    catch (err) {
        console.error("Error", err);

    }
}