import * as db from "../database/db.js";

export async function getUsersWithPosts() {
    const getUsersWithPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users
    INNER JOIN posts ON users.id = posts.user_id
    `

    try {
        const res = await db.query(getUsersWithPostsQuery)
        return res.rows
    }
    catch (err) {
        console.error("Error", err);

    }
}

export async function getAllUsersAndTheirPosts() {
    const getAllUsersAndTheirPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id
    `

    try {
        const res = await db.query(getAllUsersAndTheirPostsQuery)
        return res.rows
    }
    catch (err) {
        console.error("Error", err);

    }
}