import { Model, DataTypes, Sequelize } from 'sequelize';
import {Category} from './Category';

interface PostAttributes {
  id?: number;
  title: string;
  content: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Post extends Model<PostAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    // Define associations here
    Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Post.hasMany(models.Comment, {foreignKey: 'postId', as:'comments', onDelete:'CASCADE'});
    Post.belongsToMany(models.category, {through: 'PostCategories', as:'Categories', foreignKey:'postId',otherKey:'categoryId'});
  }
}

const initPostModel= (sequelize: Sequelize) => {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Make sure the 'Users' table exists and matches this reference
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      sequelize,
      tableName: 'Posts',
      modelName: 'Post',
    }
  );

  return Post;
};

export { Post, initPostModel };