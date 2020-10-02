import { Router } from "express";
const router = Router();

import { welcome } from "../controllers/index.controllers";

router.get("/", welcome);

export default router;
