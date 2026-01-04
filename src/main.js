// import "dotenv/config"
import { averagePostsPerUser, countPostsByUser } from "./concepts/aggregation.js";
import { createUsersTable, insertUser, fetchAllUsers, updateUserInfo, deleteInfo } from "./concepts/basic-queries.js";
import { getPaginatedUser, getSortedUsers, getUsersWhere } from "./concepts/filtering-sorting.js";
import { getAllUsersAndTheirPosts, getUsersWithPosts } from "./concepts/joins.js";
import { createPostsTable, insertNewPost } from "./concepts/relationships.js";
async function testBasicQueries() {
    try {
        // await insertUser("chris", "chris@gmail.com")
        // await insertUser("joshua", "joshua@gmail.com")
        // await insertUser("Helen", "helen@gmail.com")
        // await insertUser("abass", "abass@gmail.com")
        await insertUser("jlo", "jlo@gmail.com")
        // console.log("All users");
        // const allUsers = await fetchAllUsers()
        // console.log(allUsers);

        // const updateUser = await updateUserInfo("abass@gmail.com", "imoli")
        // console.log(updateUser);

        // const deletedUser = await deleteInfo("abass@gmail.com")
        // console.log(deletedUser);


    }
    catch (err) {
        console.error("Error", err);

    }
}

async function testAllQueries() {
    // await testRealtionshipQueries()
    // testBasicQueries()
    // await testJoinQueries()
    await testAggregateQueries()
}

async function testJoinQueries() {
    try {
        // const usersWithPost = await getUsersWithPosts()
        // console.log(usersWithPost);

        const allUsersWithAllPosts = await getAllUsersAndTheirPosts()
        console.log(allUsersWithAllPosts);


    }
    catch (err) {
        console.error("Error", err);
    }
}


testAllQueries()

async function testfilterAndSortQueries() {
    try {
        // get users whose username start with j
        // const zFilteredUsers = await getUsersWhere("username LIKE 'j%' ")
        // console.log(zFilteredUsers);

        // const sortedUsers = await getSortedUsers("created_At", "ASC")
        // console.log(sortedUsers);

        const getPaginatedUsers = await getPaginatedUser(2, 1)
        console.log(getPaginatedUsers);

    }
    catch (err) {
        console.error("Erorr", err);
    }
}

async function testRealtionshipQueries() {
    try {
        // await createPostsTable()
        await insertNewPost("Second post", "This is my second post", 1)
    }
    catch (err) {
        console.error("Error", err);
    }
}

async function testAggregateQueries() {
    try {
        // const postCount = await countPostsByUser()
        // console.log(postCount);

        const averagePostsPerUserInfo = await averagePostsPerUser()
        console.log(averagePostsPerUserInfo);
    }
    catch (err) {
        console.error("Error", err);
    }
}