import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing Items endpoints:', () => {

  it('It should create an Item', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
      .post('/api/tables')
      .set('Accept', 'application/json')
      .send(table)
      .end((err, r1) => {
        console.log('table', r1.body.data);
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                console.log('product', r2.body.data)
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                  TableId: tableId,
                  StatusOrder: 'Order Status'
                };
                chai.request(app)
                  .post('/api/orders')
                  .set('Accept', 'application/json')
                  .send(order)
                  .end((err, r4) => {
                    console.log('order', r4.body.data);
                    const orderId = r4.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, res) => {
                            console.log('item', res.body.data);
                            const itemId = res.body.data.id
                            expect(res.status).to.equal(201)
                            expect(res.body.message).to.equal('Item Created!')
                            expect(res.body.data).to.include({
                                id: itemId,
                                ProductId: productId,
                                OrderId: orderId,
                                StatusItem: 'Item Status'
                            })
                            done()              
                        })
                })
            })
      })
  })

  it('It should not create an item with incomplete parameters', (done) => {
    const item = {
        StatusItem: 'Item Status'
    }
    chai.request(app)
      .post('/api/items')
      .set('Accept', 'application/json')
      .send(item)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
            .eql('Please provide complete details')
        done()
      })
  })

  it('It should get all items', (done) => {

        //1st create the table
        const table = {
            TableNumber:1, 
            IsFree: true
        };
        chai.request(app)
          .post('/api/tables')
          .set('Accept', 'application/json')
          .send(table)
          .end((err, r1) => {
            const tableId = r1.body.data.id;
            //2nd create the product
            const product = {
                name:'A new Product', 
                breakfast: true,
                price:8.0
            };
            chai.request(app)
                .post('/api/products')
                .set('Accept', 'application/json')
                .send(product)
                .end((err, r2) => {
                    const productId = r2.body.data.id;
                    //3rd create the order
                    const order = {
                      TableId: tableId,
                      StatusOrder: 'Order Status'
                    };
                    chai.request(app)
                      .post('/api/orders')
                      .set('Accept', 'application/json')
                      .send(order)
                      .end((err, r3) => {
                        const orderId = r3.body.data.id;
                        //4th create the item
                        const item = {
                            ProductId: productId,
                            OrderId: orderId,
                            StatusItem: 'Item Status'
                        }
                        chai.request(app)
                            .post('/api/items')
                            .set('Accept', 'application/json')
                            .send(item)
                            .end((err, r4) => {
                                console.log('item', r4.body.data);
                                chai.request(app)
                                    .get('/api/items')
                                    .set('Accept', 'application/json')
                                    .end((err, res) => {
                                    expect(res.status).to.equal(200)
                                    res.body.data[0].should.have.property('id')
                                    res.body.data[0].should.have.property('ProductId')
                                    res.body.data[0].should.have.property('OrderId')
                                    res.body.data[0].should.have.property('StatusItem')
                                    done()
                                })    
                            })
                    })
                })
          })
  })

  it('It should get a particular item', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
        .post('/api/tables')
        .set('Accept', 'application/json')
        .send(table)
        .end((err, r1) => {
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                    TableId: tableId,
                    StatusOrder: 'Order Status'
                };
                chai.request(app)
                    .post('/api/orders')
                    .set('Accept', 'application/json')
                    .send(order)
                    .end((err, r3) => {
                    const orderId = r3.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, r4) => {
                            console.log('item', r4.body.data.id)
                            const itemId =  r4.body.data.id 
                            chai.request(app)
                            .get(`/api/items/${itemId}`)
                            .set('Accept', 'application/json')
                            .end((err, res) => {
                                expect(res.status).to.equal(200)
                                expect(res.body.message).to.equal('Found Item')
                                res.body.data.should.have.property('id')
                                res.body.data.should.have.property('ProductId')
                                res.body.data.should.have.property('OrderId')
                                res.body.data.should.have.property('StatusItem')
                                done()
                            })     
                        })
                })
            })
        })
  })

  it('It should not get a particular item with invalid id', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
        .post('/api/tables')
        .set('Accept', 'application/json')
        .send(table)
        .end((err, r1) => {
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                    TableId: tableId,
                    StatusOrder: 'Order Status'
                };
                chai.request(app)
                    .post('/api/orders')
                    .set('Accept', 'application/json')
                    .send(order)
                    .end((err, r3) => {
                    const orderId = r3.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, r4) => {
                            const itemId = 8888
                            chai.request(app)
                            .get(`/api/items/${itemId}`)
                            .set('Accept', 'application/json')
                            .end((err, res) => {
                                expect(res.status).to.equal(404)
                                res.body.should.have.property('message')
                                    .eql(`Cannot find Item with the id ${itemId}`)
                                done()
                            })  
                        })
                })
            })
        })
  })

  it('It should not get a particular item with non-numeric id', (done) => {
    const itemId = 'aaa'
    chai.request(app)
      .get(`/api/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
            .eql('Please input a valid numeric id value')
        done()
      })
  })

  it('It should update an item', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
        .post('/api/tables')
        .set('Accept', 'application/json')
        .send(table)
        .end((err, r1) => {
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                    TableId: tableId,
                    StatusOrder: 'Order Status'
                };
                chai.request(app)
                    .post('/api/orders')
                    .set('Accept', 'application/json')
                    .send(order)
                    .end((err, r3) => {
                    const orderId = r3.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, r4) => {
                            console.log('item', r4.body.data);
                            const itemId = r4.body.data.id;
                            const updatedItem = {
                                id: itemId,
                                ProductId: productId,
                                OrderId: orderId,
                                StatusItem: 'Item Status Updated'
                            }
                            chai.request(app)
                              .put(`/api/items/${itemId}`)
                              .set('Accept', 'application/json')
                              .send(updatedItem)
                              .end((err, res) => {
                                expect(res.status).to.equal(200)
                                expect(res.body.message).to.equal('Item updated')
                                res.body.data.should.have.property('id')
                                res.body.data.should.have.property('ProductId')
                                res.body.data.should.have.property('OrderId')
                                res.body.data.should.have.property('StatusItem')
                              }) 
                              done()  
                        })
                })
            })
        })
  })

  it('It should not update an item with an invalid id', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
        .post('/api/tables')
        .set('Accept', 'application/json')
        .send(table)
        .end((err, r1) => {
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                    TableId: tableId,
                    StatusOrder: 'Order Status'
                };
                chai.request(app)
                    .post('/api/orders')
                    .set('Accept', 'application/json')
                    .send(order)
                    .end((err, r3) => {
                    const orderId = r3.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, r4) => {
                            console.log('item', r4.body.data);
                            const itemId = 9999
                            const updatedItem = {
                                id: itemId,
                                ProductId: productId,
                                OrderId: orderId,
                                StatusItem: 'Item Status Updated'
                            }
                            chai.request(app)
                              .put(`/api/items/${itemId}`)
                              .set('Accept', 'application/json')
                              .send(updatedItem)
                              .end((err, res) => {
                                expect(res.status).to.equal(404)
                                res.body.should.have.property('message')
                                    .eql(`Cannot find Item with the id: ${itemId}`)
                                done()
                              }) 
                        })
                })
            })
        })
  })

  it('It should not update an item with non-numeric id value', (done) => {
    const itemId = 'aaa'
    const updatedItem = {
        id: itemId,
        ProductId: 1,
        OrderId: 1,
        StatusItem: 'Item Status'
    }
    chai.request(app)
      .put(`/api/items/${itemId}`)
      .set('Accept', 'application/json')
      .send(updatedItem)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
            .eql('Please input a valid numeric id value')
        done()
      })
  })

  it('It should delete an item', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
        .post('/api/tables')
        .set('Accept', 'application/json')
        .send(table)
        .end((err, r1) => {
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                    TableId: tableId,
                    StatusOrder: 'Order Status'
                };
                chai.request(app)
                    .post('/api/orders')
                    .set('Accept', 'application/json')
                    .send(order)
                    .end((err, r3) => {
                    const orderId = r3.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, r4) => {
                            console.log('item', r4.body.data);
                            const itemId = r4.body.data.id;
                            chai.request(app)
                              .delete(`/api/items/${itemId}`)
                              .set('Accept', 'application/json')
                              .end((err, res) => {
                                expect(res.status).to.equal(200)
                                expect(res.body.message).to.equal('Item deleted')
                                expect(res.body.data).to.include({})
                              }) 
                              done() 
                        })
                })
            })
        })
  }) 

  it('It should not delete a order with invalid id', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
        .post('/api/tables')
        .set('Accept', 'application/json')
        .send(table)
        .end((err, r1) => {
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                    TableId: tableId,
                    StatusOrder: 'Order Status'
                };
                chai.request(app)
                    .post('/api/orders')
                    .set('Accept', 'application/json')
                    .send(order)
                    .end((err, r3) => {
                    const orderId = r3.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, r4) => {
                            console.log('itemId', r4.body.data.id);
                            const itemId = 777
                            chai.request(app)
                              .delete(`/api/items/${itemId}`)
                              .set('Accept', 'application/json')
                              .end((err, res) => {
                                expect(res.status).to.equal(404)
                                res.body.should.have.property('message')
                                    .eql(`Item with the id ${itemId} cannot be found`)
                                done()
                              })
                        })
                })
            })
        })
  })

  it('It should not delete an item with non-numeric id', (done) => {
    const itemId = 'bbb'
    chai.request(app)
      .delete(`/api/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
            .eql('Please provide a numeric id value')
        done()
      })
  })

  it('It should get the Items of a particular Order', (done) => {
    //1st create the table
    const table = {
        TableNumber:1, 
        IsFree: true
    };
    chai.request(app)
        .post('/api/tables')
        .set('Accept', 'application/json')
        .send(table)
        .end((err, r1) => {
        const tableId = r1.body.data.id;
        //2nd create the product
        const product = {
            name:'A new Product', 
            breakfast: true,
            price:8.0
        };
        chai.request(app)
            .post('/api/products')
            .set('Accept', 'application/json')
            .send(product)
            .end((err, r2) => {
                const productId = r2.body.data.id;
                //3rd create the order
                const order = {
                    TableId: tableId,
                    StatusOrder: 'Order Status'
                };
                chai.request(app)
                    .post('/api/orders')
                    .set('Accept', 'application/json')
                    .send(order)
                    .end((err, r3) => {
                    const orderId = r3.body.data.id;
                    //4th create the item
                    const item = {
                        ProductId: productId,
                        OrderId: orderId,
                        StatusItem: 'Item Status'
                    }
                    chai.request(app)
                        .post('/api/items')
                        .set('Accept', 'application/json')
                        .send(item)
                        .end((err, r4) => {
                            console.log('item', r4.body.data)
                            const itemId =  r4.body.data.id 
                            chai.request(app)
                            .get(`/api/items/order/${orderId}`)
                            .set('Accept', 'application/json')
                            .end((err, res) => {
                                expect(res.status).to.equal(200)
                                console.log(res.body)
                                expect(res.body.message).to.equal(`Found Items of Order with id ${orderId}`)
                                expect(res.body.data)
                                .to.be.an.instanceOf(Array)
                                .and.to.have.property(0)
                                .that.includes.all.keys([ 'id', 'ProductId', 'OrderId', 'StatusItem' ])
                                done()
                            })     
                        })
                })
            })
        })
  })
})