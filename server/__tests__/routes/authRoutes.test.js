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
      expect(response.headers['set-cookie']).toBeDefined();
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

  describe('POST /api/v1/auth/register', () => {
    it('should create a new user and return a token', async () => {
      const newUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'newuser@example.com',
        password: 'newuserpassword',
      };

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(newUser);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('token');
      expect(response.headers['set-cookie']).toBeDefined();
    });

    it('should return 400 for missing required fields', async () => {
      const incompleteUser = {
        firstName: 'John',
        lastName: 'Doe',
        // Missing email and password
      };

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(incompleteUser);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toEqual([
        'Please add a password',
        'Please add an email',
      ]);
    });

    it('should return 400 for duplicate email', async () => {
      const existingUser = {
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@test.com',
        password: 'userpassword',
      };

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(existingUser);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('error');
    });
  });
});
