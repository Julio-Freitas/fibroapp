import { Router } from "express";

import QuestionsController from "../controller/QuestionsController";

const router = new Router();
router.get("/", QuestionsController.index);
router.post("/", QuestionsController.create);

export default router;
