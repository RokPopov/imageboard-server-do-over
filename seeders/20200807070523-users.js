"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        email: "rok@rok.com",
        password: bcrypt.hashSync("something", 10),
        fullName: "Rok Petarda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "bosti@bosti.com",
        password: bcrypt.hashSync("sthsth", 10),
        fullName: "Bosti Petarda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "nino@nino.com",
        password: bcrypt.hashSync("glavni", 10),
        fullName: "Nino Petarda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
