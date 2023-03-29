const request = require('supertest');
const app = require('../server/server.js');

describe('Testing Suite for homeRouter', () => {
  it('returns a status 302 (redirect) when no userId cookie is present', () => {
    return request(app).get('/home/games').expect(302);
  });

  it('returns a status 200 and a JSON object when making a get request to /home/gameplayers', () => {
    return request(app).get('/home/gameplayers/1').set('Cookie', ['userId=1']).expect(200).expect('Content-Type', /json/);
  });

  it('returns a status 200 and a JSON object when making a get request to /home/games', () => {
    return request(app).get('/home/games').set('Cookie', ['userId=1']).expect(200).expect('Content-Type', /json/);
  });

  it('returns a status 200 and a JSON object with the value true when making a post request to /home/joingame/:gameId', () => {
    return request(app)
      .post('/home/joingame/1')
      .set('Cookie', ['userId=1'])
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body).toEqual(true);
      });
  });

  it('returns a status 200 and a JSON object when making a delete request to /home/leavegame', () => {
    return request(app).del('/home/leavegame').set('Cookie', ['userId=1']).send('gameId=1').expect(200).expect('Content-Type', /json/);
  });

  let results;
  it('returns a status 200 and a JSON object when making a post request to /home/creategame', () => {
    let startingData = { name: 'test', type: 'basketball', datetime: 'test', location: 'test', maxplayers: 'test' };
    return request(app)
      .post('/home/creategame')
      .set('Cookie', ['userId=1'])
      .send(startingData)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        results = res.body;
        expect(results.game_id);
        expect(results.name).toEqual(startingData.name);
        expect(results.type).toEqual(startingData.type);
        expect(results.datetime).toEqual(startingData.datetime);
        expect(results.location).toEqual(startingData.location);
        expect(results.maxplayers).toEqual(startingData.maxplayers);
      });
  });

  it('returns a status 200 and a JSON object true when making a delete request to /home/deletegame', () => {
    return request(app)
      .del('/home/deletegame')
      .set('Cookie', ['userId=1'])
      .send({ gameId: results.game_id })
      .then((res) => {
        expect(res.body).toEqual(true);
      });
  });
});
