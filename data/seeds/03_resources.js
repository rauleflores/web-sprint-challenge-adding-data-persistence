exports.seed = async function (knex) {
  await knex("resources").insert([
    { name: "Computer", description: "To write code with" },
    { name: "Pencil", description: "To help plan the schemas" },
    { name: "Car", description: "To take me places" },
    { name: "Food", description: "To refuel" },
    { name: "Sword", description: "For fighting off monsters" },
    { name: "Submarine", description: "For deep sea exploration" },
    { name: "Shovel", description: "For digging" },
    { name: "Raccoon", description: "To turn into a space captain" },
    { name: "Notebook", description: "To write schemas in" },
    { name: "Sweater", description: "For the cold" },
    { name: "Desk", description: "To put my computer on" },
  ]);
};
