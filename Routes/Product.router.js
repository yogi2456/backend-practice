import { Router } from "express";
import { addProduct, getAllProducts, filterProducts, getSingleProduct, sortingProducts, paginationProducts } from "../Controllers/Products.controllers.js";
import { checkUserId } from "../Middlewares/AllMiddlewares.js";

const router = Router();

router.post("/add-product", checkUserId, addProduct)
router.get("/get-all-product", getAllProducts)
router.post("/get-single-product", getSingleProduct)
router.post("/filter-products", filterProducts)
router.post("/sorting-products", sortingProducts)
router.post("/pagination-products", paginationProducts)
router.post("/your-products", yourProducts)

export default router;