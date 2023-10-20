// imports
import { Router } from "express";
import { UpdateFeather, createFeather, deleteFeather, getAllFeather } from "../controllers/Feather/FeatherControllers.js";
// router
const router = Router();

// user register router
router.post("/create-feater", createFeather);
router.delete('/delete-feather/:id', deleteFeather)
router.patch('/update-feather/:id', UpdateFeather)
router.get("/get-feather", getAllFeather);
router.get("/get-feather/:id", getAllFeather);
// exporting
export default router;