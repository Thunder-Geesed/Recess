const { isWebTarget } = require('webpack-dev-server');
const db = require('../server/server.js');
const gctest = require('../server/controllers/gameController');




describe('db unit testing', async () => {
    xit('throws error', ()=> {
        expect(db.post({randomNmuber: 12})).toBeInstanceOf(Error);
    })
    await it('connects to the server', () => {
        expect(db.listen()).toBe('LISTEN TO MEEEE')
    })
    // it('connects to the database', ()=> {
        
    // })
})

expect(gctest.getGames()).toBeInstanceOf(Error);

// const sum =require('../sum')
// const printsBS = require('../sum')//so from the sum file we are exporting an object and calling it printBS?

// test('adds 1 + 2 to equal 3', () => {
//     expect(printsBS.sum(1, 2)).toBe(3);
//   });

// test('prints 5', () => {
//     expect(sum.printsBS()).toBe(5);
// })
  
