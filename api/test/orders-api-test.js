// import chai from 'chai';
// import chatHttp from 'chai-http';
// import 'chai/register-should';
// import app from '../index';

// chai.use(chatHttp);
// const { expect } = chai;

// describe('Testing Orders endpoints:', () => {

//   it('It should create a order', (done) => {
//     const table = {
//         TableNumber:1, 
//         IsFree: true
//       }
//       chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log(res.body.data.id)////////checar
//         const order = {
//           TableId: 1,
//           StatusOrder: 'Order Status'
//         }
//         chai.request(app)
//           .post('/api/orders')
//           .set('Accept', 'application/json')
//           .send(order)
//           .end((err, res) => {
//             expect(res.status).to.equal(201)
//             expect(res.body.message).to.equal('Order Created!')
//             expect(res.body.data).to.include({
//                 id: 1,
//                 TableId: 1,
//                 StatusOrder: 'Order Status'
//             })
//             done()
//         })
//       })
//   })

//   it('It should not create an order with incomplete parameters', (done) => {
//     const order = {
//         StatusOrder: 'Order Status'
//     }
//     chai.request(app)
//       .post('/api/orders')
//       .set('Accept', 'application/json')
//       .send(order)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide complete details')
//         done()
//       })
//   })

//   it('It should get all orders', (done) => {
//     chai.request(app)
//       .get('/api/orders')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(200)
//         res.body.data[0].should.have.property('id')
//         res.body.data[0].should.have.property('TableId')
//         res.body.data[0].should.have.property('IsFree')
//         done()
//       })
//   })

//   it('It should get a particular order', (done) => {
//     const orderId = 1
//     chai.request(app)
//       .get(`/api/orders/${orderId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(200)
//         expect(res.body.message).to.equal('Found Order')
//         res.body.data.should.have.property('id')
//         res.body.data[0].should.have.property('TableId')
//         res.body.data[0].should.have.property('IsFree')
//         done()
//       })
//   })

//   it('It should not get a particular order with invalid id', (done) => {
//     const orderId = 8888
//     chai.request(app)
//       .get(`/api/orders/${orderId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Order with the id ${orderId}`)
//         done()
//       })
//   })

//   it('It should not get a particular order with non-numeric id', (done) => {
//     const orderId = 'aaa'
//     chai.request(app)
//       .get(`/api/orders/${orderId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should update a order', (done) => {
        
//     const table = {
//         TableNumber:1, 
//         IsFree: true
//       }
//       chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log(res.body.data.id)
//         const order = {
//           TableId: 1,
//           StatusOrder: 'Order Status'
//         }
//         chai.request(app)
//           .post('/api/orders')
//           .set('Accept', 'application/json')
//           .send(order)
//           .end(() => {
//             console.log(res.body.data.id)
//             const orderId = 1
//             const updatedOrder = {
//                 TableId: 1,
//                 StatusOrder: 'Order Status'
//             }
//             chai.request(app)
//             .put(`/api/orders/${orderId}`)
//             .set('Accept', 'application/json')
//             .send(updatedOrder)
//             .end((err, res) => {
//               expect(res.status).to.equal(200)
//               expect(res.body.message).to.equal('Order updated')
//               expect(res.body.data.id).equal(updatedOrder.id)
//               expect(res.body.data.name).equal(updatedOrder.TableNumber)
//               expect(res.body.data.breakfast).equal(updatedOrder.IsFree)
//             })
//             done()
//         })
//       })
//   })

//   it('It should not update a order with an invalid id', (done) => {
//     const orderId = '9999'
//     const updatedOrder = {
//       id: orderId,
//       TableId: 1,
//       StatusOrder: 'Order Status'
//     }
//     chai.request(app)
//       .put(`/api/orders/${orderId}`)
//       .set('Accept', 'application/json')
//       .send(updatedOrder)
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Order with the id ${orderId}`)
//         done()
//       })
//   })

//   it('It should not update a order with non-numeric id value', (done) => {
//     const orderId = 'ggg'
//     const updateOrder = {
//       id: orderId,
//       TableId: 1,
//       StatusOrder: 'Order Status'
//     }
//     chai.request(app)
//       .put(`/api/orders/${orderId}`)
//       .set('Accept', 'application/json')
//       .send(updateOrder)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should delete a order', (done) => {
//     const table = {
//         TableNumber:1, 
//         IsFree: false
//       }
//       chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log(res.body.data.id)
//         const order = {
//           TableId: 1,
//           StatusOrder: 'Order Status'
//         }
//         chai.request(app)
//           .post('/api/orders')
//           .set('Accept', 'application/json')
//           .send(order)
//           .end(() => {
//             console.log(res.body.data.id)
//             const orderId = 1
//             chai.request(app)
//             .delete(`/api/orders/${orderId}`)
//             .set('Accept', 'application/json')
//             .end((err, res) => {
//                 expect(res.status).to.equal(200)
//                 expect(res.body.message).to.equal('Order deleted')
//                 expect(res.body.data).to.include({})
//             })
//             done()
//         })
//       })
//   })

//   it('It should not delete a order with invalid id', (done) => {
//     const orderId = 777
//     chai.request(app)
//       .delete(`/api/orders/${orderId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Order with the id ${orderId} cannot be found`)
//         done()
//       })
//   })

//   it('It should not delete a order with non-numeric id', (done) => {
//     const orderId = 'bbb'
//     chai.request(app)
//       .delete(`/api/orders/${orderId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide a numeric id value')
//         done()
//       })
//   })
// })