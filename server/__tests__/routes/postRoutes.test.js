import request from 'supertest';
import app from '../../app.js';
import { connectTestDb, clear, close } from '../../config/db.js';
import Post from '../../models/Post.js';
import User from '../../models/User.js';
import { seedAll } from '../../seeder/index.js';

describe('Post Routes', () => {
  beforeAll(async () => await connectTestDb());
  beforeEach(async () => {
    await seedAll();
  });
  afterEach(async () => {
    await clear();
  });
  afterAll(async () => await close());

  describe('POST /api/v1/posts/create', () => {
    it('should create a new post', async () => {
      const user = await User.findOne({ email: 'testuser@test.com' });
      const content = 'This is a test post';

      const response = await request(app)
        .post('/api/v1/posts/create')
        .set('Cookie', [`token=${user.getSignedJwtToken()}`])
        .send({ content });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveProperty('_id');
      expect(response.body.data).toHaveProperty('content', content);
      expect(response.body.data).toHaveProperty('author', user._id.toString());

      const createdPost = await Post.findById(response.body.data._id);
      expect(createdPost).toBeTruthy();
      expect(createdPost.content).toBe(content);
      expect(createdPost.author.toString()).toBe(user._id.toString());
    });

    it('should return 400 if content is missing', async () => {
      const user = await User.findOne({ email: 'testuser@test.com' });

      const response = await request(app)
        .post('/api/v1/posts/create')
        .set('Cookie', [`token=${user.getSignedJwtToken()}`])
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('error');
    });

    it('should return 401 if user is not authenticated', async () => {
      const response = await request(app)
        .post('/api/v1/posts/create')
        .send({ content: 'This is a test post' });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/v1/posts', () => {
    it('should get all posts', async () => {
      const user = await User.findOne({ email: 'testuser@test.com' });
      const token = user.getSignedJwtToken();

      const response = await request(app)
        .get('/api/v1/posts')
        .set('Cookie', [`token=${token}`]);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('count');
      expect(response.body).toHaveProperty('pagination');
      expect(response.body).toHaveProperty('data');
      expect(response.body.data.length).toBeGreaterThan(0);
    });

    it('should return 401 if user is not authenticated', async () => {
      const response = await request(app).get('/api/v1/posts');

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('error');
    });
  });
});
