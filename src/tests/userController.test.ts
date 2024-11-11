
import request from 'supertest';
import app from '../server'; 
//import Category from '../Category';

import { sequelize } from '../config/config'; 

describe('User API', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); 
  });

  afterAll(async () => {
    await sequelize.close(); 
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.username).toBe('testuser');
  });

});

  it('should retrieve all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it.only('should retrieve a single user by ID', async () => {
    const res = await request(app).get('/api/users/1'); 
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put('/api/users/1') 
      .send({ username: 'updatedUser' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.username).toBe('updatedUser');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/api/users/1'); 
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User deleted');
  });