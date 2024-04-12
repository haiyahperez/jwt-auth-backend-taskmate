const db = require("../db/dbConfig");

const getTasks = async (user_id) => {
    try {
        const userTasks = await db.any(
            "SELECT * FROM task WHERE user_id = $1",
            user_id
        );
        return userTasks;
    } catch (error) {
        console.error("Error fetching user tasks:", error);
        throw error;
    }
};

const getTaskGoals = async () => {
    try {
        const taskGoals = await db.any(
            "SELECT task.task_id, task.title AS task_title, task.description AS task_description, goal.goal_id, goal.title AS goal_title, goal.description AS goal_description FROM task JOIN goal ON task.goal_id = goal.goal_id"
        );
        return taskGoals;
    } catch (error) {
        console.error("Error fetching task goals:", error);
        throw error;
    }
};

const getTaskByCategoryColor = async () => {
    try {
        const taskByCategoryColor = await db.any(
            "SELECT task.*, category.color FROM task JOIN category ON task.cat_id = category.cat_id"
        );
        return taskByCategoryColor;
    } catch (error) {
        console.error("Error fetching task with category color:", error);
        throw error;
    }
};

const updateTask = async (task_id, title, description) => {
    try {
        const updatedTask = await db.one(
            "UPDATE task SET title = $1, description = $2 WHERE task_id = $3 RETURNING *",
            [title, description, task_id]
        );
        return updatedTask;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

const createTask = async (user_id, title, goal_id, description) => {
    try {
        const newTask = await db.one(
            "INSERT INTO task (user_id, title, goal_id, description) VALUES ($1, $2, $3, $4) RETURNING *",
            [user_id, title, goal_id, description]
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
    getTasks,
    getTaskGoals,
    getTaskByCategoryColor,
    updateTask, 
    createTask,
    deleteTask
};
