const express = require("express");
const goal = express.Router();
const {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
} = require("../queries/goal");

// GET to retrieve user goals
goal.get("/goal", async (req, res) => {
    try {
        const { user_id } = req.params;
        const goals = await getGoals(user_id);
        res.status(200).json(goals);
    } catch (error) {
        console.error("Error fetching goals:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// POST to create a new goal
goal.post("/goal", async (req, res) => {
    const { user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely } = req.body;
    try {
        const newGoal = await createGoal(user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely);
        res.status(201).json(newGoal);
    } catch (error) {
        console.error("Error creating goal:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// PUT to update an existing goal
goal.put("/goal/:goal_id", async (req, res) => {
    const { goal_id } = req.params;
    const { user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely } = req.body;
    try {
        const updatedGoal = await updateGoal(goal_id, user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely);
        res.status(200).json(updatedGoal);
    } catch (error) {
        console.error("Error updating goal:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE to delete a goal
goal.delete("/goal/:goal_id", async (req, res) => {
    const { goal_id } = req.params;
    try {
        await deleteGoal(goal_id);
        res.status(204).end();
    } catch (error) {
        console.error("Error deleting goal:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = goal;
