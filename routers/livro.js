import { Router } from "express";
import { getLivros, getLivro, postLivro, deleteLivro, patchLivro } from "../controllers/livro.js";

const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/", postLivro);

router.delete("/:id", deleteLivro);

router.patch("/:id", patchLivro);

export default router;