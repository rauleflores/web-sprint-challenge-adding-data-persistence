const express = require("express");
const r = require("../models/resources");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  try {
    const tasks = await r.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get("/resources/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await r.findById(id);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    const newResource = {
      name: req.body.name,
      description: req.body.description,
    };

    if (!newResource.name) {
      return res.json({
        errorMessage: "Please provide a name for the new resource.",
      });
    }

    const addedTask = await r.add(newResource);
    res.json(addedTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
