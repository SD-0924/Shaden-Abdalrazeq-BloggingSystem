import request from 'supertest';
import app from '../server';

describe('Post API', () => {
  it('should respond with 200 for a test request', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
