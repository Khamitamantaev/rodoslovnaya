module.exports = app => {
  const starscontroller = require("../controllers/stars.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", starscontroller.create);

  // Retrieve all Tutorials
  router.get("/", starscontroller.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", starscontroller.findOne);

  // Update a Tutorial with id
  router.put("/:id", starscontroller.update);

  // Delete a Tutorial with id
  router.delete("/:id", starscontroller.delete);

  // Delete all Tutorials
  router.delete("/", starscontroller.deleteAll);

  app.use('/api/stars', router);
};