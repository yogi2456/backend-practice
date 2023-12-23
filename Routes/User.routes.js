import { Router } from "express";
import { Cart, addCart, deleteCart, getProduct, patchProduct, putProduct } from "../Controllers/User.controllers.js";

const router = Router();

router.post("/add-cart", addCart)
router.post("/cart", Cart)
router.post("/delete-cart", deleteCart)

router.patch("/patch-product/:id", patchProduct)
router.put("/put-product/:id", putProduct)
router.get("/get-product/:id", getProduct)

export default router;