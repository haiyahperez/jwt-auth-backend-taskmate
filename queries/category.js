const db = require("../db/dbConfig")

const getAllCategories = async () => {
    try {
        const allCategories = await db.any(
            "SELECT * FROM category"
        )
        return allCategories
    } catch (error) {
        console.error("Error fetching request", error);
    }
};

module.exports = { 
    getAllCategories
}