import { faker } from '@faker-js/faker';
import User from '../models/User';

export async function seedUsers(numberOfUsers = 5) {
  const dummyUsers = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'testuser@test.com',
      password: 'password123',
    },
  ];
  for (let i = 0; i < numberOfUsers; i++) {
    dummyUsers.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'password',
      role: 'user', // Or assign different roles as needed
    });
  }
  try {
    await User.deleteMany({}); // Clear any existing users (optional)

    for (const user of dummyUsers) {
      const newUser = new User(user);
      await newUser.save();
    }

    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
}
