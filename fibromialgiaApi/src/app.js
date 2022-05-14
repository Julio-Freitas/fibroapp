import express from "express";
import cors from "cors";
import QuestionRouter from "./routes/QuestionRouter";
import AnswersRouter from "./routes/AnswersRouter";
import ResultRouter from "./routes/ResultRouter";

import { config } from "dotenv";
import "./database";
config();
class App {
  constructor() {
    this.app = express();
    this.middelwares();
    this.routes();
  }

  middelwares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use("/questions", QuestionRouter);
    this.app.use("/answers", AnswersRouter);
    this.app.use("/result", ResultRouter);
  }
}

export default new App().app;
