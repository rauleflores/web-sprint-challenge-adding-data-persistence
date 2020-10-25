exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "Sprint Project",
      description:
        "This is a project that I worked on for my Lambda Sprint Challenge - Node DB",
      completed: false,
    },
    {
      name: "Second Project",
      description:
        "Writing a desctiption for a second project was easier than I tought.",
      completed: false,
    },
  ]);
};
