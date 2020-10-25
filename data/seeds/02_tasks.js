exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      description: "Answer interview questions",
      notes: "Answer the questions that are in the README file",
      completed: true,
      project_id: 1,
    },
    {
      description: "Add knex to project",
      notes: "Import knex and create a knexfile",
      completed: true,
      project_id: 1,
    },
    {
      description: "Create migrations",
      notes: "Create a migrations folder in the data folder",
      completed: true,
      project_id: 1,
    },
    {
      description: "Create seeds",
      notes: "Create a seeds folder in the data folder",
      completed: true,
      project_id: 1,
    },
    {
      description: "Write more tasks",
      notes: "Make some tasks for project 2",
      completed: true,
      project_id: 2,
    },
    {
      description: "Even more tasks!",
      notes: "Write a lot more tasks for project 2",
      completed: false,
      project_id: 1,
    },
  ]);
};
