const db = require("../data/config");

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where("id", id).first();
}

function add(project) {
  return db("projects")
    .insert(project)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("projects").where("id", id).update(changes);
}

function remove(id) {}

module.exports = {
  find,
  findById,
  add,
  update,
};
