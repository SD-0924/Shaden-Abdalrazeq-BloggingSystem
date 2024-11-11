import { Model, DataTypes, Sequelize } from 'sequelize';

// Define the User class with TypeScript types
class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Static associate method for defining associations
  static associate(models: any) {
    // Define associations here if needed
        User.hasMany(models.Comment, {foreignKey: 'userId', as:'comments', onDelete:'CASCADE'});
        User.hasMany(models.Post, {foreignKey: 'userId', as:'posts', onDelete:'CASCADE'});


  }
}

// Initialize the User model with attributes and options
const initUserModel= (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Users',
      modelName: 'User',
    }
  );

  return User;
};

export { User, initUserModel };