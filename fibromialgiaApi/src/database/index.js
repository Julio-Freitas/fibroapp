import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import Scores from "../models/Scores";
import Questions from "../models/Questions";
import Answers from "../models/Answers";

const Models = [Scores, Answers, Questions];
const connection = new Sequelize(databaseConfig);

Models.forEach((model) => model.init(connection));

Models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
