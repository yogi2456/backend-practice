import { Router } from "express";
import authRoutes from './Auth.routes.js';
import productRouter from './Product.router.js'
import userRoutes from './User.routes.js'

const router = Router();


router.use("/auth", authRoutes )
router.use("/product", productRouter)
router.use("/user", userRoutes)

export default router;