const express = require("express");
const projectsRouter = require("./routers/projects");
const resourcesRouter = require("./routers/resources");
const tasksRouter = require("./routers/tasks");

const server = express();
const port = process.env.PORT || 4400;

server.use(express.json());
server.use(projectsRouter);
server.use(resourcesRouter);
server.use(tasksRouter);

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
