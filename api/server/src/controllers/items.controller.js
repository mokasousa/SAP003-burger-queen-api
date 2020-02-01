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
    console.log(req.body.ProductId, req.body.OrderId, req.body.StatusItem)
    if (!req.body.ProductId || !req.body.OrderId || !req.body.StatusItem) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newItem = req.body
    try {
      const createdItem = await ItemService.createItem(newItem)
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
    const { OrderId } = req.params

    if (!Number(OrderId)) {
      util.setError(400, 'Please input a valid numeric id value')
      return util.send(res)
    }

    try {
      const orderItems = await ItemService.getItemsByOrder(OrderId)

      if (!orderItems) {
        util.setError(404, `Cannot find Items of Order with id: ${OrderId}`)
      } else {
        util.setSuccess(200, `Found Items of Order with id ${OrderId}`, orderItems)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }
}

export default ItemController;
