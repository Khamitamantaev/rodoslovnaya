const db = require("../models");
const Star = db.stars;
const Op = db.Sequelize.Op;

// Create and Save 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Star
  const star = {
    title: req.body.title,
    achievement: req.body.achievement,
    friends: req.body.friends,
    positionX: req.body.positionX,
    positionY: req.body.positionY
  };

  // Save Tutorial in the database
  Star.create(star)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Star."
      });
    });
};

// Retrieve all 
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Star.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stars."
      });
    });
};

// Find a single Star with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Star with id=" + id
      });
    });
};

// Update a Star by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Star.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Star was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Star with id=${id}. Maybe Star was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Star with id=" + id
      });
    });
};

// Delete a Star with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Star.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Star was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Star with id=${id}. Maybe Star was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Star with id=" + id
      });
    });
};

// Delete all Stars from the database.
exports.deleteAll = (req, res) => {
  Star.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Stars were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stars."
      });
    });
};
