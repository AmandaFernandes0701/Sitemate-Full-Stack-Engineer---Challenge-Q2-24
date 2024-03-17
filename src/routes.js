const { Router } = require("express");
const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const routes = Router();

routes.post("/user", UserValidator.create, UserController.create);
routes.get("/user/:id?", UserController.read);
routes.delete("/user/:id", UserValidator.destroy, UserController.destroy);
routes.put("/user/:id", UserValidator.update, UserController.update);

module.exports = routes;
