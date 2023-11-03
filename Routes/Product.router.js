import { Router } from "express";
import { addProduct } from "../Controllers/Products.controllers.js";
import { checkUserId } from "../Middlewares/AllMiddlewares.js";

const router = Router();

router.post("/add-product", checkUserId, addProduct)

export default router;