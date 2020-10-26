const express = require("express");
const t = require("../models/tasks");

const router = express.Router();

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await t.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get("/tasks/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await t.findById(id);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.post("/tasks", async (req, res, next) => {
  try {
    const newTask = {
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed || false,
      project_id: req.body.project_id,
    };
    if (!newTask.description || !newTask.project_id) {
      return res.json({
        errorMessage:
          "Please provide a description and project id for the new task.",
      });
    }
    const addedTask = await t.add(newTask);
    res.json(addedTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
