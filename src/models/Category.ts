import { Model, DataTypes, Sequelize, Optional } from 'sequelize';


interface CategoryAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Category.belongsToMany(models.Post, {
      through: 'PostCategories',
      as: 'posts',
      foreignKey: 'categoryId'
    });
  }
}

const initCategoryModel= (sequelize: Sequelize) => {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'Categories', 
    }
  );

  return Category;
};

export {Category, initCategoryModel};