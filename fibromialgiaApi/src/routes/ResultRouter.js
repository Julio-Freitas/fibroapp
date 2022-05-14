import { Router } from "express";
import ResultController from "../controller/ResultController";

const router = new Router();
router.post("/", ResultController.index);

export default router;
