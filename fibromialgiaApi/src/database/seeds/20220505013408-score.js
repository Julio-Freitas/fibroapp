"use strict";
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("scores", [
      {
        score: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        score: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        score: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        score: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("scores", null, {});
  },
};
