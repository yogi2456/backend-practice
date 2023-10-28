import { Router } from "express";
import { Login, Register } from "./../Controllers/Auth.controllers.js"

const router = Router();

router.get("/login", Login)
router.post("/register", Register)

export default router;