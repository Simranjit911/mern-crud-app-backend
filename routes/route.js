import express from "express";
import userController from "../controllers/controllers.js";
const router=express.Router()

//All Routes
router.get("/user",userController.getAllUsers)
router.get("/user/s/:id",userController.singleUser)
router.post("/user",userController.createUser)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)


export default router