import request from 'supertest';
import app from '../src/app.js';

test('checks status code if client sends valid input', async () => {
  const test = await request(app)
    .post('/api/movies/1/reviews')
    .set('comment', null)
    .expect(401);
});

test('Return 401 status if token is wrong', async () => {
  const testing = await request(app)
    .post('/api/movies/1/reviews')
    .set('Authorization', 'bearer :hello')
    .expect(401);
});
