"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("images", [
      {
        title: "m4",
        url:
          "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2019/m-portaits-6/bmw-m4-coupe-yas-marina-blue-nick.f82m-ai-04.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "m2",
        url:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftopgear.nl%2Fautonieuws%2Fbmw-m2-cs-2020-gelekt%2F&psig=AOvVaw2EJ6UfkLw8CV7cfwfUaGuW&ust=1596870258799000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC_07rDiOsCFQAAAAAdAAAAABAD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "m3",
        url:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autowereld.be%2Fautotests%2Feerste-test%2Fbmw-m3-cs-2018.html&psig=AOvVaw0nNaZvnLyIaIy9mBcOA4jL&ust=1596870275402000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjHksDDiOsCFQAAAAAdAAAAABAD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "poweeeeer",
        url:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carthrottle.com%2Fpost%2Fthis-evil-diesel-mercedes-wagon-makes-all-other-drift-cars-look-like-stupid-toys%2F&psig=AOvVaw3-V9mYJonjwx1mIC3gcJo_&ust=1596870232053000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCHlrDDiOsCFQAAAAAdAAAAABAD",
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
