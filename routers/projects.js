const express = require("express");
const Proj = require("../models/project");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await Proj.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Proj.findById(id);
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.post("/projects", async (req, res, next) => {
  try {
    const newProject = {
      name: req.body.name,
      description: req.body.description,
      completed: false,
    };

    if (!newProject.name) {
      return res.status(400).json({
        errorMessage: "Please provide a name for the project.",
      });
    }
    const addedProject = await Proj.add(newProject);
    res.status(201).json(addedProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
