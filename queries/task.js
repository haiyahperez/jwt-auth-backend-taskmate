const db = require("../db/dbConfig.js");

const getTasksByUser = async (user_id) => {
    try {
        const tasksbyUser = await db.any(
            "SELECT * FROM task WHERE user_id = $1", user_id
            );
        return tasksbyUser;
    } catch (error) {
        console.error("Error fetching user tasks:", error);
        throw error;
    }
};

const getTaskById = async (task_id) => {
    console.log(task_id)
    try {
        const taskById = await db.any(
            "SELECT * FROM task WHERE task_id = $1", task_id
        )
        return taskById;
    } catch (error) {
        console.error("Error fetching user tasks: ", error);
        throw error;
    }
};

const getTaskByCategoryColor = async (cat_id) => {
    try {
        const taskByCategoryColor = await db.any(
            "SELECT task.* , category.color FROM task JOIN category ON task.cat_id = category.cat_id WHERE category.cat_id = $1", cat_id
        );
        return taskByCategoryColor;
    } catch (error) {
        console.error("Error fetching task with category color:", error);
        throw error;
    }
};

const updateTask = async ({ task_id, cat_id, title, description, specific, measure, attain, relevant, timely }) => {
    try {
        const updatedTask = await db.one(
            "UPDATE task SET cat_id = $2, title = $3, description = $4, specific = $5, measure = $6, attain = $7, relevant = $8, timely = $9 WHERE task_id = $1 RETURNING *",
            [task_id, cat_id, title, description, specific, measure, attain, relevant, timely]
        );
        return updatedTask;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

const createTask = async ({user_id, cat_id, title, description, specific, measure, attain, relevant, timely}) => {
    try {
        const newTask = await db.one(
            "INSERT INTO task (user_id, cat_id, title, description, specific, measure, attain, relevant, timely) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
         [user_id, cat_id, title, description, specific, measure, attain, relevant, timely]
        );
        return newTask;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
};

const deleteTask = async (task_id) => {
    try {
        await db.none(
            "DELETE FROM task WHERE task_id = $1",
            task_id
        );
        console.log("Task deleted successfully.");
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

module.exports = {
    getTasksByUser,
    getTaskById,
    getTaskByCategoryColor,
    updateTask, 
    createTask,
    deleteTask
};
