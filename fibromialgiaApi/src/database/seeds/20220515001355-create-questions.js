"use strict";
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("questions", [
      {
        question_name: "Fadiga",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_name: "Dores Generalizadas",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_name: "Sono não-restaurador",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_name: "Sintomas Cognitivos",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_name: "Sintomas somáticos",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("questions", null, {});
  },
};
