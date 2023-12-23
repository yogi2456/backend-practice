import { Router } from "express";
import { Cart, addCart, deleteCart, getUser, patchUpdateUser, putUpdateUser} from "../Controllers/User.controllers.js";

const router = Router();

router.post("/add-cart", addCart)
router.post("/cart", Cart)
router.post("/delete-cart", deleteCart)

router.patch("/patch-updateuser/:id", patchUpdateUser)
router.put("/put-updateuser/:id", putUpdateUser)
router.get("/get-user/:id", getUser)

export default router;