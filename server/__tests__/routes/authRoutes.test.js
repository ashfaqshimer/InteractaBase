import request from 'supertest';
import app from '../../app.js';
import { connectTestDb, clear, close } from '../../config/db.js';
import { seedUsers } from '../../seeder/userSeed.js';

describe('Authentication Routes', () => {
  beforeAll(async () => await connectTestDb());
  beforeEach(async () => {
    await seedUsers();
  });
  afterEach(async () => {
    await clear();
  });
  afterAll(async () => await close());

  describe('POST /api/v1/auth/login', () => {
    it('should log in a user and return a token', async () => {
      const response = await request(app).post('/api/v1/auth/login').send({
        email: 'testuser@test.com',
        password: 'password123', // Replace with the actual password
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('token');
      const tokenPattern =
        /^eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;

      expect(response.body.token).toMatch(tokenPattern);
    });

    it('should return 401 for invalid credentials', async () => {
      // Test Case 1: Missing Credentials
      let response = await request(app).post('/api/v1/auth/login').send({});
      expect(response.status).toBe(400);

      // Test Case 2: Incorrect Email Format
      response = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'invalid-email', password: 'invalid_password' });
      expect(response.status).toBe(401);

      // Test Case 3: User Not Found
      response = await request(app).post('/api/v1/auth/login').send({
        email: 'nonexistent@example.com',
        password: 'invalid_password',
      });
      expect(response.status).toBe(401);
    });
  });
});
