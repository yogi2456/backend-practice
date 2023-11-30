import { Router } from "express";
import { addCart, getCartProduct } from "../Controllers/User.controllers.js";

const router = Router();

router.post("/add-cart", addCart)
router.post("/get-cart-product", getCartProduct)

export default router;