// index.js

import { seedUsers } from './userSeed.js';
import { seedPosts } from './postSeed.js';

export async function seedAll(numberOfUsers = 5, postsPerUser = 3) {
  try {
    await seedUsers(numberOfUsers);
    await seedPosts(postsPerUser);
    console.log('All data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}
