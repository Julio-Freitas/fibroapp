"use strict";
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("answers", [
      //Fadiga
      {
        answer: "Sem alteração",
        question_id: 1,
        score: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer: "Alterações fracas, geralmente brandas e intermitentes",
        question_id: 1,
        score: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Moderado, alterações consideráveis, frequentemente presentes e/ou em nível moderado.",
        question_id: 1,
        score: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Severo: difuso, contínuo, problemas que atrapalham a vida diária.",
        question_id: 1,
        score: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },

      //Dores generalizadas
      {
        answer: "De 0 a 2 áreas ",
        question_id: 2,
        score: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer: "De 3 a 8 áreas ",
        question_id: 2,
        score: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer: "Mais que 9 áreas",
        question_id: 2,
        score: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

      //Sono não-restaurador
      {
        answer: "Sem alteração ou isso não acontece comigo",
        question_id: 3,
        score: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Alterações brandas ou leves, geralmente brandas e intermitentes",
        question_id: 3,
        score: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Moderado, alterações consideráveis, frequentemente presentes e/ou em nível moderado.",
        question_id: 3,
        score: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Severo: difuso, contínuo, problemas que atrapalham a vida diária.",
        question_id: 3,
        score: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },

      //Sintomas Cognitivos

      {
        answer: "Sem alteração ou isso não acontece comigo",
        question_id: 3,
        score: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Alterações brandas ou leves, geralmente brandas e intermitentes",
        question_id: 4,
        score: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Moderado, alterações consideráveis, frequentemente presentes e/ou em nível moderado.",
        question_id: 4,
        score: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer:
          "Severo: difuso, contínuo, problemas que atrapalham a vida diária.",
        question_id: 4,
        score: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },

      //Sintomas somáticos
      {
        answer: "Nenhum sintoma sintomático ou apenas 1 sintoma",
        question_id: 5,
        score: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer: "Poucos sintomas somáticos: de 2 a 10 sintomas",
        question_id: 5,
        score: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer: "Moderados sintomas somáticos: de 2 a 10 sintomas",
        question_id: 5,
        score: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        answer: "Grande quantidade de sintomas somáticos: Acima de 22 sintomas",
        question_id: 5,
        score: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("answers", null, {});
  },
};
