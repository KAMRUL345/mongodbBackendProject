import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

router.post("/register", UsersController.registerController);
router.post("/login", UsersController.loginController);
router.get("/read-user", AuthMiddleware, UsersController.readUserController);

export default router;
