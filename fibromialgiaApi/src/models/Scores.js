import Sequelize, { Model } from "sequelize";
export default class Scores extends Model {
  static init(sequelize) {
    const params = {
      score: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    };

    super.init(params, { tableName: "scores", sequelize });

    return this;
  }
}
