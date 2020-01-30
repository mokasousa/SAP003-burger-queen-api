import OrderService from '../services/OrderService'
import Util from '../utils/Utils'

const util = new Util()

class OrderController {
  static async getAllOrders(req, res) {
    try {
      const allOrders = await OrderService.getAllOrders()
      if (allOrders.length > 0) {
        util.setSuccess(200, 'Orders retrieved', allOrders)
      } else {
        util.setSuccess(200, 'No Order found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async createOrder(req, res) {
    console.log(req.body.TableId, req.body.StatusOrder)
    if (!req.body.TableId || !req.body.StatusOrder ) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newOrder = req.body
    try {
      const createdOrder = await OrderService.createOrder(newOrder)
      util.setSuccess(201, 'Order Created!', createdOrder)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updateOrder(req, res) {
    const alterOrder = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric id value')
      return util.send(res)
    }
    try {
      const updateOrder = await OrderService.updateOrder(id, alterOrder)
      if (!updateOrder) {
        util.setError(404, `Cannot find Order with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Order updated', updateOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getOrder(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric id value')
      return util.send(res)
    }

    try {
      const theOrder = await OrderService.getOrder(id)

      if (!theOrder) {
        util.setError(404, `Cannot find Order with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Order', theOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric id value')
      return util.send(res)
    }

    try {
      const orderToDelete = await OrderService.deleteOrder(id)

      if (orderToDelete) {
        util.setSuccess(200, 'Order deleted')
      } else {
        util.setError(404, `Order with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default OrderController;







// export async function getOrders(req, res) {
//     const {
//         table,     
//         status_order,
//         created_at,
//         updated_at 
//     } = req.body;

//     try {
//         const orders = await Orders.findAll()
//         return res.json({
//             data: orders
//         })
//     } catch (e) {
//         console.log(e)
//     };
// }

// export async function createOrder(req, res) {
//     const {
//         table,     
//         status_order,
//         created_at,
//         updated_at 
//     } = req.body;

//     try {
//         let newOrder = await Orders.create({
//             table,     
//             status_order,
//             created_at,
//             updated_at
//         }, {
//             fields: ['table', 'status_order', 'created_at', 'updated_at']
//         });
//         if (newOrder) {
//             return res.json({
//                 message: 'Order created successfully',
//                 data: newOrder
//             });
//         }
//     } catch (e) {
//         console.log(e)
//         return res.status(500).json({
//             message: 'Something went wrong',
//             data: {}
//         })
//     }
// }

// export async function getOneOrder(req, res) {
//     const { id } = req.params; // req.params -> n. in api/orders/n.
//     const order = await Orders.findOne({
//         where:{
//             id,
//         }
//     });
//     return res.json({
//         data: order
//     })
// }

// export async function deleteOneOrder(req, res) {
//     const { id } = req.params;
//     const deleteRowCount = await Orders.destroy({
//         where:{
//             id,
//         }
//     });
//     return res.json({
//         message:'Order deleted successfully',
//         count: deleteRowCount
//     })
// }

// export async function updateOneOrder(req, res) {
//     const { id } = req.params; 
//     const {
//         table,     
//         status_order,
//         created_at,
//         updated_at 
//     } = req.body;

//     const orders = await Orders.findOne({
//         attributes: ['id', 'table', 'status_order', 'created_at', 'updated_at'],
//         where:{
//             id,
//         }
//     });
//     if(orders.length > 0){
//         orders.forEach(async order => {
//             await order.update({
//                 table,     
//                 status_order,
//                 created_at,
//                 updated_at 
//             })
//         })
//     }
//     return res.json({
//         message:'Order updated successfully',
//         data: orders
//     })
// }
