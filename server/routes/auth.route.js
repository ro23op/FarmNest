import { Router } from "express";
import { login } from "../controllers/auth.controller";

const router = Router();

router.post("/firebase-login", login);


export default router;