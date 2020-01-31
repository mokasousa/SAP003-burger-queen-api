// import chai from 'chai';
// import chatHttp from 'chai-http';
// import 'chai/register-should';
// import app from '../index';

// chai.use(chatHttp);
// const { expect } = chai;

// describe('Testing Items endpoints:', () => {

//   it('It should create an Item', (done) => {
//     const table = {
//         TableNumber:1, 
//         IsFree: true
//     }
//     //cria a table
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log('table', res.body.data.id)//const tableId || const tableId = 1
//         const product = {
//             name:'A new Product', 
//             breakfast: true,
//             price:8
//         }
//         //cria o product
//         chai.request(app)
//             .post('/api/products')
//             .set('Accept', 'application/json')
//             .send(product)
//             .end(() => {
//                 console.log('product', res.body.data.id)//const productId || const productId = 1
//                 const order = {
//                   TableId: 1,//tableId
//                   StatusOrder: 'Order Status'
//                 }
//                 //cria a Order
//                 chai.request(app)
//                   .post('/api/orders')
//                   .set('Accept', 'application/json')
//                   .send(order)
//                   .end(() => {
//                     console.log('order', res.body.data.id)//const orderId || const orderId = 1
//                     const item = {
//                         ProductId: productId,
//                         OrderId: orderId,
//                         StatusItem: 'Item Status'
//                     }
//                     //cria o item
//                     chai.request(app)
//                         .post('/api/items')
//                         .set('Accept', 'application/json')
//                         .send(item)
//                         .end((err, res) => {
//                             expect(res.status).to.equal(201)
//                             expect(res.body.message).to.equal('Item Created!')
//                             expect(res.body.data).to.include({
//                                 id: 1,
//                                 ProductId: productId,
//                                 OrderId: orderId,
//                                 StatusItem: 'Order Status'
//                             })
//                             done()              
//                         })
//                 })
//             })
//       })
//   })//OK para testar

//   it('It should not create an item with incomplete parameters', (done) => {
//     const item = {
//         StatusItem: 'Item Status'
//     }
//     chai.request(app)
//       .post('/api/items')
//       .set('Accept', 'application/json')
//       .send(item)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide complete details')
//         done()
//       })
//   })//

//   it('It should get all items', (done) => {

//     const table = {
//         TableNumber:1, 
//         IsFree: true
//     }
//     //cria a table
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log('table', res.body.data.id)//const tableId || const tableId = 1
//         const product = {
//             name:'A new Product', 
//             breakfast: true,
//             price:8
//         }
//         //cria o product
//         chai.request(app)
//             .post('/api/products')
//             .set('Accept', 'application/json')
//             .send(product)
//             .end(() => {
//                 console.log('product', res.body.data.id)//const productId || const productId = 1
//                 const order = {
//                   TableId: 1,//tableId
//                   StatusOrder: 'Order Status'
//                 }
//                 //cria a Order
//                 chai.request(app)
//                   .post('/api/orders')
//                   .set('Accept', 'application/json')
//                   .send(order)
//                   .end(() => {
//                     console.log('order', res.body.data.id)//const orderId || const orderId = 1
//                     const item = {
//                         ProductId: productId,
//                         OrderId: orderId,
//                         StatusItem: 'Item Status'
//                     }
//                     //get all items
//                     chai.request(app)
//                       .get('/api/items')
//                       .set('Accept', 'application/json')
//                       .end((err, res) => {
//                         expect(res.status).to.equal(200)
//                         res.body.data[0].should.have.property('id')
//                         res.body.data[0].should.have.property('ProductId')
//                         res.body.data[0].should.have.property('OrderId')
//                         res.body.data[0].should.have.property('StatusItem')
//                         done()
//                       })
//                 })
//             })
//       })
//   })//OK para testar

//   it('It should get a particular item', (done) => {

//     const table = {
//         TableNumber:1, 
//         IsFree: true
//     }
//     //cria a table
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log('table', res.body.data.id)//const tableId || const tableId = 1
//         const product = {
//             name:'A new Product', 
//             breakfast: true,
//             price:8
//         }
//         //cria o product
//         chai.request(app)
//             .post('/api/products')
//             .set('Accept', 'application/json')
//             .send(product)
//             .end(() => {
//                 console.log('product', res.body.data.id)//const productId || const productId = 1
//                 const order = {
//                   TableId: 1,//tableId
//                   StatusOrder: 'Order Status'
//                 }
//                 //cria a Order
//                 chai.request(app)
//                   .post('/api/orders')
//                   .set('Accept', 'application/json')
//                   .send(order)
//                   .end(() => {
//                     console.log('order', res.body.data.id)//const orderId || const orderId = 1
//                     const item = {
//                         ProductId: productId,
//                         OrderId: orderId,
//                         StatusItem: 'Item Status'
//                     }
//                     //cria o item
//                     chai.request(app)
//                         .post('/api/items')
//                         .set('Accept', 'application/json')
//                         .send(item)
//                         .end((err, res) => {
//                             console.log('item', res.body.data.id)//const itemId || const itemId = 1  
//                             chai.request(app)
//                               .get(`/api/items/${itemId}`)
//                               .set('Accept', 'application/json')
//                               .end((err, res) => {
//                                 expect(res.status).to.equal(200)
//                                 expect(res.body.message).to.equal('Found Item')
//                                 res.body.data.should.have.property('id')
//                                 res.body.data.should.have.property('ProductId')
//                                 res.body.data.should.have.property('OrderId')
//                                 res.body.data.should.have.property('StatusItem')
//                                 done()
//                               })      
//                         })
//                 })
//             })
//       })
//   })

//   it('It should not get a particular item with invalid id', (done) => {
//     const itemId = 8888
//     chai.request(app)
//       .get(`/api/items/${itemId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Item with the id ${itemId}`)
//         done()
//       })
//   })

//   it('It should not get a particular item with non-numeric id', (done) => {
//     const itemId = 'aaa'
//     chai.request(app)
//       .get(`/api/items/${itemId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should update a item', (done) => {
        
//     const table = {
//         TableNumber:1, 
//         IsFree: true
//     }
//     //cria a table
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log('table', res.body.data.id)//const tableId || const tableId = 1
//         const product = {
//             name:'A new Product', 
//             breakfast: true,
//             price:8
//         }
//         //cria o product
//         chai.request(app)
//             .post('/api/products')
//             .set('Accept', 'application/json')
//             .send(product)
//             .end(() => {
//                 console.log('product', res.body.data.id)//const productId || const productId = 1
//                 const order = {
//                   TableId: 1,//tableId
//                   StatusOrder: 'Order Status'
//                 }
//                 //cria a Order
//                 chai.request(app)
//                   .post('/api/orders')
//                   .set('Accept', 'application/json')
//                   .send(order)
//                   .end(() => {
//                     console.log('order', res.body.data.id)//const orderId || const orderId = 1
//                     const item = {
//                         ProductId: productId,
//                         OrderId: orderId,
//                         StatusItem: 'Item Status'
//                     }
//                     //cria o item
//                     chai.request(app)
//                         .post('/api/items')
//                         .set('Accept', 'application/json')
//                         .send(item)
//                         .end((err, res) => {
//                             console.log('item', res.body.data.id)//const itemId || const itemId = 1  
//                             chai.request(app)
//                               .put(`/api/items/${itemId}`)
//                               .set('Accept', 'application/json')
//                               .end((err, res) => {
//                                 expect(res.status).to.equal(200)
//                                 expect(res.body.message).to.equal('Found Item')
//                                 res.body.data.should.have.property('id')
//                                 res.body.data.should.have.property('ProductId')
//                                 res.body.data.should.have.property('OrderId')
//                                 res.body.data.should.have.property('StatusItem')
//                               }) 
//                               done()     
//                         })
//                 })
//             })
//       })
//   })

//   it('It should not update an item with an invalid id', (done) => {
//     const itemId = '9999'
//     const updatedItem = {
//         id: itemId,
//         ProductId: 1,
//         OrderId: 1,
//         StatusItem: 'Item Status'
//     }
//     chai.request(app)
//       .put(`/api/items/${itemId}`)
//       .set('Accept', 'application/json')
//       .send(updatedItem)
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Item with the id ${itemId}`)
//         done()
//       })
//   })//OK para testar

//   it('It should not update an item with non-numeric id value', (done) => {
//     const itemId = '9999'
//     const updatedItem = {
//         id: itemId,
//         ProductId: 1,
//         OrderId: 1,
//         StatusItem: 'Item Status'
//     }
//     chai.request(app)
//       .put(`/api/items/${itemId}`)
//       .set('Accept', 'application/json')
//       .send(updatedItem)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should delete an item', (done) => {

//     const table = {
//         TableNumber:1, 
//         IsFree: true
//     }
//     //cria a table
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         console.log('table', res.body.data.id)//const tableId || const tableId = 1
//         const product = {
//             name:'A new Product', 
//             breakfast: true,
//             price:8
//         }
//         //cria o product
//         chai.request(app)
//             .post('/api/products')
//             .set('Accept', 'application/json')
//             .send(product)
//             .end(() => {
//                 console.log('product', res.body.data.id)//const productId || const productId = 1
//                 const order = {
//                   TableId: 1,//tableId
//                   StatusOrder: 'Order Status'
//                 }
//                 //cria a Order
//                 chai.request(app)
//                   .post('/api/orders')
//                   .set('Accept', 'application/json')
//                   .send(order)
//                   .end(() => {
//                     console.log('order', res.body.data.id)//const orderId || const orderId = 1
//                     const item = {
//                         ProductId: productId,
//                         OrderId: orderId,
//                         StatusItem: 'Item Status'
//                     }
//                     //cria o item
//                     chai.request(app)
//                         .post('/api/items')
//                         .set('Accept', 'application/json')
//                         .send(item)
//                         .end((err, res) => {
//                             console.log('item', res.body.data.id)//const itemId || const itemId = 1  
//                             chai.request(app)
//                               .delete(`/api/items/${itemId}`)
//                               .set('Accept', 'application/json')
//                               .end((err, res) => {
//                                 expect(res.status).to.equal(200)
//                                 expect(res.body.message).to.equal('Item deleted')
//                                 expect(res.body.data).to.include({})
//                               }) 
//                               done()     
//                         })
//                 })
//             })
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

//   it('It should not delete an item with non-numeric id', (done) => {
//     const itemId = 'bbb'
//     chai.request(app)
//       .delete(`/api/items/${itemId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide a numeric id value')
//         done()
//       })
//   })
// })