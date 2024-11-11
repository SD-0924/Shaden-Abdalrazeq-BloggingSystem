
import { Sequelize } from 'sequelize';
import config from './config/config';

import { initUserModel } from './models/User';
import { initPostModel } from './models/Post';
import { initCommentModel } from './models/Comment';
import { initCategoryModel } from './models/Category';


const env = (process.env.NODE_ENV || 'development') as 'development' | 'test' | 'production';
const sequelizeConfig = config[env];
const sequelize = new Sequelize(sequelizeConfig);

// Initialize models
const User = initUserModel(sequelize);
const Post = initPostModel(sequelize);
const Comment = initCommentModel(sequelize);
const Category = initCategoryModel(sequelize);

// Set up associations after all models are initialized
User.associate({ Post, Comment });
Post.associate({ User, Category, Comment });
Comment.associate({ User, Post });
Category.associate({ Post });

// Export sequelize instance and models for use in other parts of the app
export { sequelize, User, Post, Comment, Category };
