let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('./index')
let should = chai.should()

chai.use(chaiHttp)
describe('Github Repos', () => {
  
  // '/' endpoint
  describe('/GET root', () => {
    it('it should get api details', (done) => {
      chai.request(app)
          .get('/user?username=Abhinav4279')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
          })
    })
  })

  // '/user' endpoint
  describe('/GET user', () => {
    it('it should get user details', (done) => {
      chai.request(app)
          .get('/user?username=Abhinav4279')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
          })
    })

    it('it should return 404', (done) => {
      chai.request(app)
          .get('/user?username=')
          .end((err, res) => {
              res.should.have.status(404);
              done();
          })
    })
  })

  // '/repos' endpoint
  describe('/GET repos', () => {
    it('it should get user details', (done) => {
      chai.request(app)
          .get('/repos?username=Abhinav4279')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('Array');
              done();
          })
    })

    it('it should return 404', (done) => {
      chai.request(app)
          .get('/repos?username=')
          .end((err, res) => {
              res.should.have.status(404);
              done();
          })
    })
  })
})