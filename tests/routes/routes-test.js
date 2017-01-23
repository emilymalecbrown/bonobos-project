const app = require('../../server/app.js');
const db = require('../../db/index.js');
const expect = require('chai').expect;
const request = require('supertest');
const agent = request.agent(app);

describe('Product Routes', () => {

  describe('api/products', () => {

    it('GET finds all products', () => {
      return agent
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          expect(res.body.length).to.be.above(0);
        });
    });

    it('GET finds a single product by id', () => {
      return agent
        .get('/api/products/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Object);
          expect(res.body.product_id).to.be.equal(1);
        });
    });

  });

});

describe('Inventory Routes', () => {

  describe('api/inventory', () => {

    it('GET finds all inventory', () => {
      return agent
        .get('/api/inventory')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          expect(res.body.length).to.be.above(0);
        });
    });

    it('GET finds inventory of a single product', () => {
      return agent
        .get('/api/inventory/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          if (res.body.length) {
            expect(res.body[0].product_id).to.be.equal(1);
          }
        });
    });

    it('GET finds inventory by waist size', () => {
      return agent
        .get('/api/inventory/size/28')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          if (res.body.length) {
            expect(res.body[0].waist).to.be.equal(28);
          }
        });
    });

    it('GET finds inventory by waist size and length', () => {
      return agent
        .get('/api/inventory/waist/28/length/38')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          if (res.body.length) {
            expect(res.body[0].waist).to.be.equal(28);
            expect(res.body[0].length).to.be.equal(38);
          }
        });
    });

    it('GET finds inventory of a certain product by waist size', () => {
      return agent
        .get('/api/inventory/1/size/28')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          if (res.body.length) {
            expect(res.body[0].product_id).to.be.equal(1);
            expect(res.body[0].waist).to.be.equal(28);
          }
        });
    });

    it('GET finds inventory of a certain product by waist size and length', () => {
      return agent
        .get('/api/inventory/1/waist/28/length/38')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          if (res.body.length) {
            expect(res.body[0].product_id).to.be.equal(1);
            expect(res.body[0].waist).to.be.equal(28);
            expect(res.body[0].length).to.be.equal(38);
          }
        });
    });

    it('GET finds inventory by style', () => {
      return agent
        .get('/api/inventory/style/jet%20blues')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          if (res.body.length) {
            expect(res.body[0].style).to.be.equal('jet blues');
          }
        });
    });

    it('GET finds inventory by product and style', () => {
      return agent
        .get('/api/inventory/1/style/jet%20blues')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.instanceOf(Array);
          if (res.body.length) {
            expect(res.body[0].product_id).to.be.equal(1);
            expect(res.body[0].style).to.be.equal('jet blues');
          }
        });
    });

  });

});
