const express = require("express");
const task = express.Router();
const {
    getUserTasks,
    updateTask,
    createTask,
    deleteTask
} = require("../queries/task");

// GET to retrieve user tasks
task.get("/task", async (req, res) => {
    try {
        const tasks = await getUserTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// POST to create a new task
task.post("/task", async (req, res) => {
    const { title, goal_id, description } = req.body;
    try {
        const newTask = await createTask(title, goal_id, description);
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// PUT to update an existing task
task.put("/task/:task_id", async (req, res) => {
    const { task_id } = req.params;
    const { title, goal_id, description } = req.body;
    try {
        const updatedTask = await updateTask(task_id, title, goal_id, description);
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE to delete a task
task.delete("/task/:task_id", async (req, res) => {
    const { task_id } = req.params;
    try {
        await deleteTask(task_id);
        res.status(204).end();
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = task;
