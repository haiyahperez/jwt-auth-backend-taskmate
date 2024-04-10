const express = require("express");
const category = express.Router();
const {
    getAllCategories
} = require("../queries/category");

category.get("/", async (req, res) => {
    const allCategory = await getAllCategories();
    if (allCategory[0]) res.status(200).json(allCategory);
    else res.status(500).json({Error})
})

module.exports = category;