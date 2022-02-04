import { jest } from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';
import api from '../src/api.js';

test('Return 401 status if invalid data', async () => {
  const fakeData = {
    data: {
      comment: null,
      rating: null,
      author: null,
      verified: false,
      movie: null,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
    },
  };

  const testing = await request(app)
    .post('/api/movies/1/reviews')
    .set(fakeData)
    .expect(401);
});
/* Det här testet gör exakt samma som test("Return 401 status if there is no authorization with token") i Haejus fil loginTest */
