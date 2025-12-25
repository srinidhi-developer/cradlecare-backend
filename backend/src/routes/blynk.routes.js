import express from "express";
import { fetchSensorData } from "../controllers/blynk.controller.js";

const router = express.Router();

router.get("/sensors", fetchSensorData);

export default router;
