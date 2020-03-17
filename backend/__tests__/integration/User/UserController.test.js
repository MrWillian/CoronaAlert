const request = require('supertest');
const app = require('../../../src/routes');

describe('Register', () => {
  it('should receive user object when store with success the user in database', async () => {
    const user = {
      name: 'Test User',
      email: 'test@test.com',
      age: 18,
      country: 'Chile',
      hasCovid: false, 
    };
    
    const response = await request(app).post('/api/user').send({
      user
    });

    expect(response.status).toBe(200);
  });
});

