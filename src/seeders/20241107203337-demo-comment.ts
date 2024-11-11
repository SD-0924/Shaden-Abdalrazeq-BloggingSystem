import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Comments', [
      {
        content: 'Great post on technology!',
        userId: 1, 
        postId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I love this article on health.',
        userId: 2, 
        postId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Very informative, thanks for sharing!',
        userId: 1,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Comments', {}, {}); 
  },
};
