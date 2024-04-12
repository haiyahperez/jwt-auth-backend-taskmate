const db = require("../db/dbConfig");

const getGoals = async (user_id) => {
    try {
        const userGoals = await db.any(
            "SELECT * FROM goal WHERE user_id = $1",
            [user_id]
        );
        return userGoals;
    } catch (error) {
        console.error("Error fetching user goals:", error);
        throw error;
    }
}

const createGoal = async (user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely) => {
    try {
        const newGoal = await db.one(
            "INSERT INTO goal (user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely]
        );
        return newGoal;
    } catch (error) {
        console.error("Error creating goal:", error);
        throw error;
    }
}

const updateGoal = async (goal_id, user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely) => {
    try {
        const updatedGoal = await db.one(
            "UPDATE goal SET user_id = $2, task_id = $3, cat_id = $4, title = $5, description = $6, specific = $7, measure = $8, attain = $9, realistic = $10, timely = $11 WHERE goal_id = $1 RETURNING *",
            [goal_id, user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely]
        );
        return updatedGoal;
    } catch (error) {
        console.error("Error updating goal:", error);
        throw error;
    }
}

const deleteGoal = async (goal_id) => {
    try {
        await db.none(
            "DELETE FROM goal WHERE goal_id = $1",
            [goal_id]
        );
    } catch (error) {
        console.error("Error deleting goal:", error);
        throw error;
    }
}

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};
