import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

router.post("/register", UsersController.registerController);
router.post("/login", UsersController.loginController);
router.get("/read-user", AuthMiddleware, UsersController.readUserController);
router.get("/", (req, res) => {
  res.send("API is running...");
});
export default router;


//to run this file use command "nodemon routes/api.js"
// or "node routes/api.js" 
//to run this file use command "node app.js"
