exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("id");
    table.text("name").notNull().unique();
    table.text("description");
    table.boolean("completed").notNull().defaultTo(0);
  });
  await knex.schema.createTable("resource", (table) => {
    table.increments("id");
    table.text("name").notNull().unique();
    table.text("description");
  });
  await knex.schema.createTable("task", (table) => {
    table.increments("id");
    table.text("description").notNull().unique();
    table.text("notes");
    table.boolean("completed").notNull().defaultTo(0);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("task");
  await knex.schema.dropTableIfExists("project");
  await knex.schema.dropTableIfExists("resource");
};
