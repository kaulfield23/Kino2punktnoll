import request from 'supertest';
import app from '../src/app.js';

test('home page renders a list of movies', async () => {
  const test = await request(app)
    .get('/')
    .expect(200);
});

test('checks if a chosen movie shows right title', async () => {
  const test = await request(app)
    .get('/movies/10')
    expect(200);
    expect(test.text.includes('Threat')).toBeTruthy();
});