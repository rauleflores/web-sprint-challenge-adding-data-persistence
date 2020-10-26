const db = require("../data/config");

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where("id", id).first();
}

function add(changes) {
  return db("resources")
    .insert(changes)
    .then((ids) => {
      return findById(ids[0]);
    });
}

module.exports = {
  find,
  findById,
  add,
};
