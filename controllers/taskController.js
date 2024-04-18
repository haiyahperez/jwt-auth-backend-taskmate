const express = require("express");
const task = express.Router();
const {
    getTasksByUser,
    getTaskById,
    getTaskByCategoryColor,
    updateTask,
    createTask,
    deleteTask
} = require("../queries/task");

// GET to retrieve user tasks
task.get("/:user_id", async (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        const getAllTasksByUser = await getTasksByUser(user_id);
        if (getAllTasksByUser[0]) res.status(200).json(getAllTasksByUser)
        else res.status(500).json({ error: "Internal server error" })} else {
        res.status(500).json({error: "Internal server error", error })}
});

// GET tasks by task_id
task.get("/form/:task_id", async (req, res) => {
    const { task_id } = req.params;
    console.log(task_id)
    try { 
        const taskById = await getTaskById(task_id); 
        res.status(200).json(taskById);
    } catch (error) {
        console.error("Error finding requests", error)
        res.status(500).json({ error: "Internal server error"})
    }
});

task.get("/category/:cat_id", async (req, res) => {
    const { cat_id } = req.params;
    try {
        const taskByCat = await getTaskByCategoryColor(cat_id);
        res.status(201).json(taskByCat);    
    } catch (error) {
        console.error("Error fetching requests:", error);
        res.status(500).json({ error: "Internal Server Error"});
    }
});

// POST to create a new task
task.post("/", async (req, res) => {
    
    try {
        const newTask = await createTask(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// PUT to update an existing task
task.put("/", async (req, res) => {
    
    try {
        const updatedTask = await updateTask(req.body);
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE to delete a task
task.delete("/task/form/:task_id", async (req, res) => {
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
