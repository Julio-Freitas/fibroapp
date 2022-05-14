import Sequelize, { Model } from "sequelize";
export default class Questions extends Model {
  static init(sequelize) {
    const params = {
      question_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    };

    super.init(params, { tableName: "questions", sequelize });

    return this;
  }

  static associate(model) {
    this.hasMany(model.Answers, { foreignKey: "question_id" });
  }
}
