import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

import {
  addVehicle,
  getVehicles,
  searchVehicles,
  updateVehicle,
  deleteVehicle,
  purchaseVehicle,
  restockVehicle,
  getVehicleById
} from "../controllers/vehicleController.js";

const router = express.Router();

// Vehicle Routes
router.post("/",protect,adminOnly, addVehicle);

router.get("/", getVehicles);

router.get("/search", searchVehicles);

router.put("/:id",protect, adminOnly,updateVehicle);

router.delete("/:id",  protect, adminOnly,deleteVehicle);

// Inventory Routes
router.post("/:id/purchase",protect, purchaseVehicle);

router.post("/:id/restock", protect, adminOnly, restockVehicle);
router.get("/:id",getVehicleById);

export default router;