const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

// Add a new task
router.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = await Task.create({ title });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task (edit title or mark as completed/uncompleted)
router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task
router.delete("/tasks/:id", async (req, res) => {
    try {
      const { id } = req.params; // Extract task ID from the request
      const deletedTask = await Task.findByIdAndDelete(id); // Find and delete the task
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" }); // Handle case where task does not exist
      }
      res.status(200).json({ message: "Task deleted successfully" }); // Success response
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle server errors
    }
  });
  

module.exports = router;
