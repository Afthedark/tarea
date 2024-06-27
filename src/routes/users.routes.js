
import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router()  //Instancia de express

router
    .route('/')
    .get(usersController.getUsers)
    .post(usersController.createUser)


export default router



