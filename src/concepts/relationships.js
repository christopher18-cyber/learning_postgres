import * as db from "../database/db.js";


export async function createPostsTable() {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_At TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `

    try {
        await db.query(createTableQuery)
        console.log("Post table created successfully.");

    }
    catch (err) {
        console.error("Error", err);
    }
}