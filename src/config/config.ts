import { Sequelize } from "sequelize";//import class sequalize
import dotenv from 'dotenv';//load environment variables from env
import { Options } from 'sequelize';
dotenv.config();//load variables in .env into process.env


//create sequelize instance
const config : { [key: string]: Options } ={
    development:{
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',

    },
};

const env = (process.env.NODE_ENV || 'development') as 'development' | 'test' | 'production';
const sequelizeConfig = config[env];

// Initialize Sequelize with the selected configuration
const sequelize = new Sequelize(sequelizeConfig);

export { sequelize };
export default config;