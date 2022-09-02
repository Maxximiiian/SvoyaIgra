module.exports = {
  async up(queryInterface, Sequelize) {
    const questionArr = [
      {
        body: 'John Doe',
        answer: '',
        score: 100,
        cat_id: 1,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 200,
        cat_id: 1,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 300,
        cat_id: 1,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 400,
        cat_id: 1,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 500,
        cat_id: 1,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 100,
        cat_id: 2,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 200,
        cat_id: 2,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 300,
        cat_id: 2,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 400,
        cat_id: 2,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 500,
        cat_id: 2,
      },
      {
        body: 'Как называется речь под выпивку?',
        answer: 'Тост',
        score: 100,
        cat_id: 3,
      },
      {
        body: 'Что такое Пивная шапка?',
        answer: 'Пена',
        score: 200,
        cat_id: 3,
      },
      {
        body: 'Коньячная гора?',
        answer: 'Арарат',
        score: 300,
        cat_id: 3,
      },
      {
        body: 'Грузинский бокал?',
        answer: 'Рог',
        score: 400,
        cat_id: 3,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 500,
        cat_id: 3,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 100,
        cat_id: 4,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 200,
        cat_id: 4,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 300,
        cat_id: 4,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 400,
        cat_id: 4,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 500,
        cat_id: 4,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 100,
        cat_id: 5,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 200,
        cat_id: 5,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 300,
        cat_id: 5,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 400,
        cat_id: 5,
      },
      {
        body: 'John Doe',
        answer: '',
        score: 500,
        cat_id: 5,
      },
    ];
    await queryInterface.bulkInsert('Questions', questionArr, {});
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