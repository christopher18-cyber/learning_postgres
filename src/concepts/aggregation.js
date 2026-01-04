import * as db from "../database/db.js";

export async function countPostsByUser() {
    const countPostsByUserQuery = `
    SELECT users.username, COUNT(posts.id) as post_count
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id
    GROUP BY users.id, users.username 
    `

    try {
        const res = await db.query(countPostsByUserQuery)
        return res.rows
    }
    catch (err) {
        console.error("Error", err);
    }
}

export async function averagePostsPerUser() {
    const averagePostsPerUserQuery = `
        SELECT AVG(post_count) as average_post
        FROM(
        SELECT COUNT (posts.id) as post_count
        FROM users
        LEFT JOIN posts ON users.id = posts.user_id
        GROUP BY users.id
        ) as user_per_counts
        `
    try {
        const res = await db.query(averagePostsPerUserQuery)
        res.rows
    }
    catch (err) {
        console.error("Error", err);
    }
}