const request = require('supertest');
const app = require('../server/server.js');

describe('gets a request for games', () => {
  it('returns a status 200 when making a get request to /home/games', () => {
    return request(app).get('/home/games').expect(200).expect('Content-Type', /json/);
  });
});
