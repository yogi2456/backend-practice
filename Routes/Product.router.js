import { Router } from "express";
import { addProduct, getAllProducts, filterProducts, getSingleProduct, sortingProducts, paginationProducts, yourProducts, updateProduct, deleteProduct } from "../Controllers/Products.controllers.js";
import { checkUserId } from "../Middlewares/AllMiddlewares.js";

const router = Router();

router.post("/add-product", checkUserId, addProduct)
router.get("/get-all-product", getAllProducts)
router.get("/get-single-product", getSingleProduct)
router.post("/filter-products", filterProducts)
router.post("/sorting-products", sortingProducts)
router.post("/pagination-products", paginationProducts)
router.post("/your-products", yourProducts)
router.post("/update-product", updateProduct)
router.delete("/delete-product", deleteProduct)
// router.post("/get-cart-product", getCartProduct)

export default router;