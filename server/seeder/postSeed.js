// postSeeder.js

import { faker } from '@faker-js/faker';
import Post from '../models/Post.js';
import User from '../models/User.js';

export async function seedPosts(postsPerUser = 3) {
  const users = await User.find();
  if (!users || users.length === 0) {
    console.error('No users found to seed posts.');
    return;
  }

  const dummyPosts = [];
  for (const user of users) {
    for (let i = 0; i < postsPerUser; i++) {
      dummyPosts.push({
        content: faker.lorem.paragraph(),
        author: user._id,
      });
    }
  }
  await Post.deleteMany({}); // Clear any existing posts (optional)

  for (const post of dummyPosts) {
    const newPost = new Post(post);
    await newPost.save();
  }
  console.log('Posts seeded successfully!');
}
