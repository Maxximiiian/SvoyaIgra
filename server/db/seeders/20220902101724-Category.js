module.exports = {
  async up(queryInterface, Sequelize) {
    const categoryArr = [
      {
        name: 'Пицца',
      },
      {
        name: 'Коты и кошки',
      },
      {
        name: 'Напитки с градусом',
      },
      {
        name: 'Elbrus bootcamp',
      },
      {
        name: 'Фильмы',
      },
    ];
    await queryInterface.bulkInsert('Categories', categoryArr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
