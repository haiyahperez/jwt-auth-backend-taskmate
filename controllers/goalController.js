const express = require("express");
const goal = express.Router();
const {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
} = require("../queries/goal");

// GET to see user goals by id
goal.get("/:task_id", async (req, res) => {
    const { task_id } = req.params;
    try {
        const goals = await getGoals(task_id);
        res.status(200).json(goals);
    } catch (error) {
        console.error("Error fetching goals:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// POST to create a new goal for task
goal.post("/:task_id", async (req, res) => {
    const { task_id } = req.params;
    const { user_id, cat_id, title, description, specific, measure, attain, realistic, timely } = req.body;
    try {
        const newGoal = await createGoal(user_id, task_id, cat_id, title, description, specific, measure, attain, realistic, timely);
        res.status(201).json(newGoal);
    } catch (error) {
        console.error("Error creating goal:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// PUT to update a goal
goal.put("/:task_id", async (req, res) => {
    const { task_id } = req.params;
    try {
        const updatedGoal = await updateGoal(task_id);
        res.json(updatedGoal);
    } catch (error) {
        console.error("Error updating request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE to delete all goals for each task
goal.delete("/:task_id", async (req, res) => {
    const { task_id } = req.params;
    try {
        await deleteGoal(task_id);
        res.status(204).end();
    } catch (error) {
        console.error("Error deleting goals for task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = goal;
