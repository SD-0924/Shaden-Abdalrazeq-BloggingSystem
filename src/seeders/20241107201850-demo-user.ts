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
        username: 'radi',
        email: 'radi@example.com',
        password: '0123456789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Users', {}, {}); 
  },
};
