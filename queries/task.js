const db = require("../db/dbConfig")

const getUserTasks = async () => {
    try {
        const userTasks = await db.any
        (
            "SELECT * FROM task WHERE user_id = <user_id>"
        )
        return userTasks
    } catch (error) {
        console.error("Error fetching request", error);
    }
};

const getTaskGoals = async () => {
    try {
        const getTaskGoals = await db.any
        (
           "SELECT task.task_id, task.title AS task_title, task.description AS task_description, goal.goal_id, goal.title AS goal_title, goal.description AS goal_description FROM task INNER JOIN goal ON task.task_id = goal.task_id INNER JOIN users ON task.user_id = users.user_id" 
        )
        return getTaskGoals
    } catch (error) {
        console.error("Error fetching request", error);
    }
};

const updateTask = async () => {
    try {
        const updateTask = await db.one
        (
            "UPDATE task SET title = $1, description = $2 WHERE task_id = $3"
        )
        return updateTask
    } catch (error) {
        console.error("Error updating request:", error);
        throw error;
    }
};

const createTask = async () => {
    try {
        const newTask = await db.one
        (
           "INSERT INTO task (user_id, task_id, title, goal_id, description) VALUES ($1, $2, $3, $4, $5" 
        )
        return newTask;
    } catch (error) {
        console.error("Error creating request:", error);
        throw error;
    }
};




module.exports = {
    getUserTasks,
    getTaskGoals,
    updateTask, 
    createTask
}