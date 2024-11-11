import dotenv from 'dotenv';
import express, {Request, Response, NextFunction} from 'express';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import commentRoutes from './routes/commentRoutes';
import categoryRoutes from './routes/categoryRoutes';


import { Sequelize } from 'sequelize';
import config from './config/config';
import { sequelize, User, Post, Comment, Category } from './database';


dotenv.config();
const PORT = process.env.PORT || 3000;
const app= express();
// const env = (process.env.NODE_ENV || 'development') as 'development' | 'test' | 'production';
// const sequelizeConfig = config[env];

// const sequelize = new Sequelize(sequelizeConfig);


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req: Request, res:Response, next:NextFunction)=>{
    res.send('API is running');
});

app.use((err:Error, req: Request, res:Response, next:NextFunction)=>{
    console.error(err.stack);
    res.status(500).json({message: 'An error occured', error: err.message});
});

sequelize.authenticate()
    .then(async()=>{
        console.log('Database connection established successfully.');
        try {
        await sequelize.sync(); // Ensures all models are in sync
        console.log('All models were synchronized successfully.');
        } catch (syncError) {
        console.error('Error syncing models:', syncError);
        }
    })
    .then(() =>{
        if (process.env.NODE_ENV !== 'test'){
            app.listen(PORT, () => {
            console.log(`Server is runnign on port ${PORT}`);
        });
    }
    })
    .catch(error =>{
        console.error("Unable to connect to the database: ", error);
    });


export default app;
