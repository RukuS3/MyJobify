import {Router} from "express";
import {obtenerPublicaciones} from "../controllers/publicaciones.controller";

const router = Router();

router.get("/publicaciones", obtenerPublicaciones);

export default router;

