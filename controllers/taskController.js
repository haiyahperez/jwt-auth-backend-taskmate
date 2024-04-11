const express = require("express");
const task = express.Router();
const {
    getUserTasks,
    getTaskGoals,
    updateTask,
    createTask
} = require("../queries/task");

task.get("/task", async (req, res) => {
    const task = await getUserTasks();
    if (task[0])res.status(200).json(task);
    else res.status(500).json({Error})
})

task.get("/task/")

module.exports = task