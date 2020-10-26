const db = require("../data/config");

function find() {
  return db("tasks as t")
    .leftJoin("projects as p", "p.id", "t.project_id")
    .select(
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      "p.name as project_name",
      "p.description as project_description"
    );
}

function findById(id) {
  return db("tasks as t")
    .where("t.id", id)
    .leftJoin("projects as p", "p.id", "t.project_id")
    .select(
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      "p.name as project_name",
      "p.description as project_description"
    );
}

function add(changes) {
  return db("tasks")
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
