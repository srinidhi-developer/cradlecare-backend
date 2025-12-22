import { Router } from "express";
import { submitContactForm } from "../controllers/contact.controller.js";
import authMiddleware from "../utils/auth.middleware.js";

const router = Router();

router
  .route("/contact")
  .post(authMiddleware, submitContactForm);

export default router;
