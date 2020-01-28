import ItemService from '../services/ItemService'
import Util from '../utils/Utils'

const util = new Util()

class ItemController {
  static async getAllItems(req, res) {
    try {
      const allItems = await ItemService.getAllItems()
      if (allItems.length > 0) {
        util.setSuccess(200, 'Items retrieved', allItems)
      } else {
        util.setSuccess(200, 'No Item found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async createItem(req, res) {
    console.log(req.body.productsId, req.body.orderId, req.body.statusItem)
    if (!req.body.productsId || !req.body.orderId || !req.body.statusItem) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newItem = req.body
    try {
      const createdItem = await ItemService.addItem(newItem)
      util.setSuccess(201, 'Item Created!', createdItem)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updateItem(req, res) {
    const alterItem = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric id value')
      return util.send(res)
    }
    try {
      const updateItem = await ItemService.updateItem(id, alterItem)
      if (!updateItem) {
        util.setError(404, `Cannot find Item with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Item updated', updateItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getItem(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric id value')
      return util.send(res)
    }

    try {
      const theItem = await ItemService.getItem(id)

      if (!theItem) {
        util.setError(404, `Cannot find Item with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Item', theItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteItem(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric id value')
      return util.send(res)
    }

    try {
      const itemToDelete = await ItemService.deleteItem(id)

      if (itemToDelete) {
        util.setSuccess(200, 'Item deleted')
      } else {
        util.setError(404, `Item with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async getItemsByOrder (req, res) {
    const { orderId } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric orderId value')
      return util.send(res)
    }

    try {
      const orderItems = await ItemService.getItemsByOrder(orderId)

      if (!orderItems) {
        util.setError(404, `Cannot find Items with the order id ${orderId}`)
      } else {
        util.setSuccess(200, 'Found Items', theItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }
}

export default ItemController;









// export async function getAllItems(req, res) {
//     const {
//         id,
//         status_item,
//         products_id,
//         order_id,
//         created_at,
//         updated_at,
//     } = req.body;

//     const items = await Items.findAll({
//         attributes:['id', 'status_item', 'products_id', 'order_id', 'created_at', 'updated_at'],
//         order: [
//             ['id', 'DESC']
//         ]
//     })
//     return res.json({items})
// }

// export async function createItem(req, res) {
//     const {
//         status_item,
//         product_id,
//         order_id,
//         created_at
//     } = req.body;

//     try {
//         let newItem = await Items.create({
//             status_item,
//             product_id,
//             order_id,
//             created_at
//         }, {
//             fields: ['status_item', 'product_id', 'order_id', 'created_at']
//         });
//         if (newItem) {
//             return res.json({
//                 message: 'Item added successfully',
//                 data: newItem
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

// export async function getOneItem(req, res) {
//     const { id } = req.params; // req.params -> n. in api/orders/n.
//     const item = await Items.findOne({
//         where:{
//             id
//         },
//         attributes:['status_item', 'product_id', 'order_id', 'created_at', 'updated_at']
//     });
//     return res.json({
//         data: item
//     })
// }

// export async function deleteOneItem(req, res) {
//     const { id, order_id } = req.params;
//     const deleteRowCount = await Items.destroy({
//         where:{
//             id,
//             order_id
//         }
//     });
//     return res.json({
//         message:'Item deleted successfully',
//         count: deleteRowCount
//     })
// }

// export async function updateOneItem(req, res) {
//     const { id } = req.params; 
//     const {
//         status_item,
//         products_id,
//         order_id,
//         created_at,
//         updated_at,
//     } = req.body;

//     const items = await Items.findOne({
//         attributes: ['id', 'status_item', 'products_id', 'order_id', 'created_at', 'updated_at'],
//         where:{
//             id,
//         }   
//     });

//     const item = await Items.update({
//         status_item,
//         products_id,
//         order_id,
//         created_at,
//         updated_at,
//     },{
//         where:{id}
//     })
   
//     return res.json({
//         message:'Author updated successfully',
//         data: item
//     })
// }

// export async function getItemsByOrder (req, res) {
//     const { order_id } = req.params;
//     const items = await Items.findAll({
//         attributes: ['id', 'status_item', 'products_id', 'order_id', 'created_at', 'updated_at'],
//         where:{order_id}
//     });
//     res.json({items})
// }