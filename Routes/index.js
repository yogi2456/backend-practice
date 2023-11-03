import { Router } from "express";
import authRoutes from './Auth.routes.js';
import productRouter from './Product.router.js'

const router = Router();


router.use("/auth", authRoutes )
router.use("/product", productRouter)

export default router;