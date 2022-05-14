import Sequelize, { Model } from "sequelize";
export default class Answers extends Model {
  static init(sequelize) {
    const params = {
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      score: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    };

    super.init(params, { tableName: "answers", sequelize });

    return this;
  }

  static associate(model) {
    this.belongsTo(model.Questions, { foreignKey: "question_id" });
  }
}
