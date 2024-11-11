import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'shaden',
        email: 'shaden@example.com',
        password: 'password123', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'muawiya',
        email: 'muawiya@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Users', {}, {}); 
  },
};
