import { Router } from "express";

import AnswersController from "../controller/AnswersController";

const router = new Router();
router.get("/", AnswersController.index);
router.post("/", AnswersController.create);

export default router;
