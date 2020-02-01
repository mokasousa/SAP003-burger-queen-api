// import chai from 'chai';
// import chatHttp from 'chai-http';
// import 'chai/register-should';
// import app from '../index';

// chai.use(chatHttp);
// const { expect } = chai;

// describe('Testing Products endpoints:', () => {

//   it('It should create a product', (done) => {
//     const product = {
//       name: "First New Product",
//       breakfast: true,
//       price: 10.0
//     }
//     chai.request(app)
//       .post('/api/products')
//       .set('Accept', 'application/json')
//       .send(product)
//       .end((err, res) => {
//         console.log(res.body.data.id)
//         const productId = res.body.data.id
//         expect(res.status).to.equal(201)
//         expect(res.body.message).to.equal('Product Created!')
//         expect(res.body.data).to.include({
//           id: productId,
//           name: "First New Product",
//           breakfast: true,
//           price: 10.0
//         })
//         done()
//       })
//   })

//   it('It should not create a product with incomplete parameters', (done) => {
//     const product = {
//       breakfast: true
//     }
//     chai.request(app)
//       .post('/api/products')
//       .set('Accept', 'application/json')
//       .send(product)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide complete details')
//         done()
//       })
//   })

//   it('It should get all products', (done) => {
//     const product = {
//       name: "First New Product",
//       breakfast: true,
//       price: 10.0
//     }
//     chai.request(app)
//       .post('/api/products')
//       .set('Accept', 'application/json')
//       .send(product)
//       .end(() => {
//         chai.request(app)
//           .get('/api/products')
//           .set('Accept', 'application/json')
//           .end((err, res) => {
//             expect(res.status).to.equal(200)
//             res.body.data[0].should.have.property('id')
//             res.body.data[0].should.have.property('name')
//             res.body.data[0].should.have.property('breakfast')
//             res.body.data[0].should.have.property('price')
//             done()
//           })
//       })
//   })

//   it('It should get a particular product', (done) => {
//     const product = {
//       name: "First New Product",
//       breakfast: true,
//       price: 10.0
//     }
//     chai.request(app)
//       .post('/api/products')
//       .set('Accept', 'application/json')
//       .send(product)
//       .end(() => {
//         const productId = 1
//         chai.request(app)
//           .get(`/api/products/${productId}`)
//           .set('Accept', 'application/json')
//           .end((err, res) => {
//             expect(res.status).to.equal(200)
//             expect(res.body.message).to.equal('Found Product')
//             res.body.data.should.have.property('id')
//             res.body.data.should.have.property('name')
//             res.body.data.should.have.property('breakfast')
//             res.body.data.should.have.property('price')
//             done()
//           })
//       })
//   })

//   it('It should not get a particular product with invalid id', (done) => {
//     const productId = 8888
//     chai.request(app)
//       .get(`/api/products/${productId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Product with the id ${productId}`)
//         done()
//       })
//   })

//   it('It should not get a particular product with non-numeric id', (done) => {
//     const productId = 'aaa'
//     chai.request(app)
//       .get(`/api/products/${productId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should update a product', (done) => {
//     const product = {
//       name: "First New Product",
//       breakfast: true,
//       price: 10.0
//     }
//     chai.request(app)
//       .post('/api/products')
//       .set('Accept', 'application/json')
//       .send(product)
//       .end(() => {
//         const productId = 1
//         const updatedProduct = {
//           id: productId,
//           name: 'Updated a Product',
//           breakfast: false,
//           price: 10.0
//         }
//         chai.request(app)
//           .put(`/api/products/${productId}`)
//           .set('Accept', 'application/json')
//           .send(updatedProduct)
//           .end((err, res) => {
//             expect(res.status).to.equal(200)
//             expect(res.body.message).to.equal('Product updated')
//             expect(res.body.data.id).equal(updatedProduct.id)
//             expect(res.body.data.name).equal(updatedProduct.name)
//             expect(res.body.data.breakfast).equal(updatedProduct.breakfast)
//             expect(res.body.data.price).equal(updatedProduct.price)
//             done()
//           })
//       })
//   })

//   it('It should not update a product with an invalid id', (done) => {
//     const productId = '9999'
//     const updatedProduct = {
//       id: productId,
//       name: 'Updated a Product',
//       breakfast: false,
//       price: 10
//     }
//     chai.request(app)
//       .put(`/api/products/${productId}`)
//       .set('Accept', 'application/json')
//       .send(updatedProduct)
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Product with the id: ${productId}`)
//         done()
//       })
//   })

//   it('It should not update a product with non-numeric id value', (done) => {
//     const productId = 'ggg'
//     const updatedProduct = {
//       id: productId,
//       name: 'Updated a Product',
//       breakfast: false,
//       price: 10
//     }
//     chai.request(app)
//       .put(`/api/products/${productId}`)
//       .set('Accept', 'application/json')
//       .send(updatedProduct)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should delete a product', (done) => {
//     const product = {
//       name: "First New Product",
//       breakfast: true,
//       price: 10.0
//     }
//     chai.request(app)
//       .post('/api/products')
//       .set('Accept', 'application/json')
//       .send(product)
//       .end(() => {
//         const productId = 1
//         chai.request(app)
//           .delete(`/api/products/${productId}`)
//           .set('Accept', 'application/json')
//           .end((err, res) => {
//             expect(res.status).to.equal(200)
//             expect(res.body.message).to.equal('Product deleted')
//             expect(res.body.data).to.include({})
//             done()
//           })
//       })
//   })

//   it('It should not delete a product with invalid id', (done) => {
//     const productId = 777
//     chai.request(app)
//       .delete(`/api/products/${productId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Product with the id ${productId} cannot be found`)
//         done()
//       })
//   })

//   it('It should not delete a product with non-numeric id', (done) => {
//     const productId = 'bbb'
//     chai.request(app)
//       .delete(`/api/products/${productId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide a numeric id value')
//         done()
//       })
//   })
// })