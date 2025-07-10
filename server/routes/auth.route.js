import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/firebase-login", login);


export default router;