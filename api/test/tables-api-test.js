// import chai from 'chai';
// import chatHttp from 'chai-http';
// import 'chai/register-should';
// import app from '../index';

// chai.use(chatHttp);
// const { expect } = chai;

// describe('Testing Tables endpoints:', () => {

//   it('It should create a table', (done) => {
//     const table = {
//       TableNumber:1, 
//       IsFree: true
//     }
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end((err, res) => {
//         console.log(res.body.data.id)
//         const tableId = res.body.data.id
//         expect(res.status).to.equal(201)
//         expect(res.body.message).to.equal('Table Created!')
//         expect(res.body.data).to.include({
//           id: tableId,
//           TableNumber:1, 
//           IsFree: true
//         })
//         done()
//       })
//   })

//   it('It should not create a table with incomplete parameters', (done) => {
//     const table = {
//       TableNumber:1, 
//     }
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide complete details')
//         done()
//       })
//   })

//   it('It should get all tables', (done) => {
//     const table = {
//         TableNumber:1, 
//         IsFree: true
//     }
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//           chai.request(app)
//             .get('/api/tables')
//             .set('Accept', 'application/json')
//             .end((err, res) => {
//               expect(res.status).to.equal(200)
//               res.body.data[0].should.have.property('id')
//               res.body.data[0].should.have.property('TableNumber')
//               res.body.data[0].should.have.property('IsFree')
//               done()
//             })
//       })
//   })

//   it('It should get a particular table', (done) => {
//     const table = {
//         TableNumber:1, 
//         IsFree: true
//     }
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//           const tableId = 1
//           chai.request(app)
//             .get(`/api/tables/${tableId}`)
//             .set('Accept', 'application/json')
//             .end((err, res) => {
//               expect(res.status).to.equal(200)
//               expect(res.body.message).to.equal('Found Table')
//               res.body.data.should.have.property('id')
//               res.body.data.should.have.property('TableNumber')
//               res.body.data.should.have.property('IsFree')
//               done()
//             })
//       })
//   })

//   it('It should not get a particular table with invalid id', (done) => {
//     const tableId = 8888
//     chai.request(app)
//       .get(`/api/tables/${tableId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Table with the id ${tableId}`)
//         done()
//       })
//   })

//   it('It should not get a particular table with non-numeric id', (done) => {
//     const tableId = 'aaa'
//     chai.request(app)
//       .get(`/api/tables/${tableId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should update a table', (done) => {
//     const table = {
//       TableNumber:1, 
//       IsFree: false
//     }
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         const tableId = 1
//         const updatedTable = {
//             id: tableId,
//             TableNumber:1, 
//             IsFree: true
//         }
//         chai.request(app)
//             .put(`/api/tables/${tableId}`)
//             .set('Accept', 'application/json')
//             .send(updatedTable)
//             .end((err, res) => {
//               expect(res.status).to.equal(200)
//               expect(res.body.message).to.equal('Table updated')
//               expect(res.body.data.id).equal(updatedTable.id)
//               expect(res.body.data.TableNumber).equal(updatedTable.TableNumber)
//               expect(res.body.data.IsFree).equal(updatedTable.IsFree)
//               done()
//             })
//       })
//   })

//   it('It should not update a table with an invalid id', (done) => {
//     const tableId = '9999'
//     const updatedTable = {
//       id: tableId,
//       TableNumber:1, 
//       IsFree: false
//     }
//     chai.request(app)
//       .put(`/api/tables/${tableId}`)
//       .set('Accept', 'application/json')
//       .send(updatedTable)
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Cannot find Table with the id: ${tableId}`)
//         done()
//       })
//   })

//   it('It should not update a table with non-numeric id value', (done) => {
//     const tableId = 'ggg'
//     const updatedTable = {
//       id: tableId,
//       TableNumber:1, 
//       IsFree: false
//     }
//     chai.request(app)
//       .put(`/api/tables/${tableId}`)
//       .set('Accept', 'application/json')
//       .send(updatedTable)
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please input a valid numeric id value')
//         done()
//       })
//   })

//   it('It should delete a table', (done) => {
//     const table = {
//         TableNumber:1, 
//         IsFree: false
//     }
//     chai.request(app)
//       .post('/api/tables')
//       .set('Accept', 'application/json')
//       .send(table)
//       .end(() => {
//         const tableId = 5
//         chai.request(app)
//           .delete(`/api/tables/${tableId}`)
//           .set('Accept', 'application/json')
//           .end((err, res) => {
//             expect(res.status).to.equal(200)
//             expect(res.body.message).to.equal('Table deleted')
//             expect(res.body.data).to.include({})
//             done()
//           })
//       })
//   })

//   it('It should not delete a table with invalid id', (done) => {
//     const tableId = 777
//     chai.request(app)
//       .delete(`/api/tables/${tableId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         res.body.should.have.property('message')
//             .eql(`Table with the id ${tableId} cannot be found`)
//         done()
//       })
//   })

//   it('It should not delete a table with non-numeric id', (done) => {
//     const tableId = 'bbb'
//     chai.request(app)
//       .delete(`/api/tables/${tableId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).to.equal(400)
//         res.body.should.have.property('message')
//             .eql('Please provide a numeric id value')
//         done()
//       })
//   })
// })