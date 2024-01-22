import { Router } from "express";
import { getLancamentos } from "../controllers/lancamentos.js";

const router = Router();

router.get("/", getLancamentos);

export default router;