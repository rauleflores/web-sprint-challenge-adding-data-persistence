const express = require("express");
const projectsRouter = require("./routers/projects");

const server = express();
const port = process.env.PORT || 4400;

server.use(express.json());
server.use(projectsRouter);

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
