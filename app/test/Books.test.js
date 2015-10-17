
var request = require('supertest');

describe('BooksController', function() {

  describe('#create() #get() #update() #delete() ', function() {

    it('should create', function (done) {
      request(sails.hooks.http.app)
        .post('/books')
        .send({ name: 'test' })
        .expect(function(res){
            console.log("\n");
            console.log("Create");
            console.log(res.body);
            console.log("\n");
        })
        .expect(201,done);
    });

    it('should update', function (done) {
      request(sails.hooks.http.app)

      // TODO: You should add id in string
        .put('/books/2')
        .send({ name: 'test updated' })
        .expect(function(res){
          console.log("\n");
          console.log("Update");
          console.log(res.body);
          console.log("\n");
        })
        .expect(200,done);
    });

    it('should get', function (done) {
      request(sails.hooks.http.app)
        // TODO: You should add id in string
        .get('/books/2')
        .send()
        .expect(function(res){
          console.log("\n");
          console.log("Get");
          console.log(res.body);
          console.log("\n");
        })
        .expect(200,done);
    });

    it('should delete', function (done) {
      request(sails.hooks.http.app)
        // TODO: You should add id in string
        .delete('/books/2')
        .send()
        .expect(function(res){
          console.log("\n");
          console.log("Delete");
          console.log(res.body);
          console.log("\n");
        })
        .expect(200,done);
    });

  });

});





