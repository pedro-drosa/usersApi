import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';

afterAll(() => {
  mongoose.connection.close();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

describe('userController', () => {
  it('should be able create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@doe.com',
      password: 'examplepassword',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        name: 'John Doe',
        email: 'johndoe@doe.com',
        password: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it('should not be possible to register users with the same email', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@doe.com',
      password: 'examplepassword',
    });

    const response = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@doe.com',
      password: 'examplepassword',
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        error: 'the email provided has already been registered',
      })
    );
  });
});
