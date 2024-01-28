import request from 'supertest';
import app from '../../app.js';



describe('Authentication Routes', () => {
  describe('POST /api/v1/auth/login', () => {
    it('should log in a user and return a token', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'user@example.com',
          password: 'your_password', // Replace with the actual password
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('token');
    });

    it('should return 401 for invalid credentials', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'invalid@example.com',
          password: 'invalid_password',
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('error');
    });

    // Add more tests for different scenarios
  });

  // Add tests for other auth routes (register, logout, getMe, etc.)
});
