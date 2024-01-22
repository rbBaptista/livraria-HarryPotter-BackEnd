import { Router } from "express";
import { getFavoritos, deleteFavorito, postFavorito } from "../controllers/favorito.js";

const router = Router();

router.get("/", getFavoritos);

// router.get("/:id", getLivro);

router.post("/", postFavorito);

router.delete("/:id", deleteFavorito);

// router.patch("/:id", patchLivro);

export default router;