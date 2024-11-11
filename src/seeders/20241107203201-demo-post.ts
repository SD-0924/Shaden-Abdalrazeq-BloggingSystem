import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'First Post',
        content: 'This is the content of the first post',
        userId: 1, // Assuming userId 1 exists in Users table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Second Post',
        content: 'This is the content of the second post',
        userId: 2, // Assuming userId 2 exists in Users table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Posts', {}, {});
  },
};
