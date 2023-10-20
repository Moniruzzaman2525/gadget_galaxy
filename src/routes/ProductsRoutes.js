// imports
import { Router } from "express";
import { UpdateProduct, createProduct, deleteProduct, getAllProduct, getFeatherProducts } from "../controllers/Products/ProductsControllers.js";
// router
const router = Router();

// user register router
router.post("/create-product", createProduct);
router.delete('/delete-product/:id', deleteProduct)
router.patch('/update-product/:id', UpdateProduct)
router.get("/get-product", getAllProduct);
router.get("/get-product/:id", getAllProduct);
router.get("/get-feather-product", getFeatherProducts);
// exporting
export default router;