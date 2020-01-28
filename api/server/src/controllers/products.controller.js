import ProductService from '../services/ProductService'
import Util from '../utils/Utils'

const util = new Util()

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductService.getAllProducts()
      if (allProducts.length > 0) {
        util.setSuccess(200, 'Products retrieved', allProducts)
      } else {
        util.setSuccess(200, 'No Product found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async createProduct(req, res) {
    console.log(req.body.name, req.body.breakfast, req.body.price)
    if (!req.body.name || !req.body.breakfast || !req.body.price ) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newProduct = req.body
    try {
      const createdProduct = await ProductService.addProduct(newProduct)
      util.setSuccess(201, 'Product Created!', createdProduct)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updateProduct(req, res) {
    const alterProduct = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric id value')
      return util.send(res)
    }
    try {
      const updateProduct = await ProductService.updateProduct(id, alterProduct)
      if (!updateProduct) {
        util.setError(404, `Cannot find product with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Product updated', updateProduct)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getProduct(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric id value')
      return util.send(res)
    }

    try {
      const theProduct = await ProductService.getProduct(id)

      if (!theProduct) {
        util.setError(404, `Cannot find Product with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Product', theProduct)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric id value')
      return util.send(res)
    }

    try {
      const productToDelete = await ProductService.deleteProduct(id)

      if (productToDelete) {
        util.setSuccess(200, 'Product deleted')
      } else {
        util.setError(404, `Product with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default ProductController;








// export async function getProducts(req, res) {
//     const {
//         id,
//         name,
//         breakfast,
//         price,
//         created_at,
//         updated_at,
//     } = req.body;

//     const products = await Products.findAll({
//         attributes:['id', 'name', 'breakfast', 'price', 'created_at', 'updated_at'],
//         order: [
//             ['name', 'ASC']
//         ]
//     })
//     return res.json({products})

// }

// export async function createProduct(req, res) {
//     const {
//         name,
//         breakfast,
//         price,
//         created_at,
//         updated_at
//     } = req.body;

//     try {
//         let newProduct = await Products.create({
//             name,
//             breakfast,
//             price,
//             created_at,
//             updated_at
//         }, {
//             fields: ['name', 'breakfast', 'price', 'created_at', 'updated_at']
//         });
//         if (newProduct) {
//             return res.json({
//                 message: 'Product created successfully',
//                 data: newProduct
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

// export async function getOneProduct(req, res) {
//     const { id } = req.params; // req.params -> n. in api/orders/n.
//     const product = await Products.findOne({
//         where:{
//             id
//         },
//         attributes:['id', 'name', 'breakfast', 'price', 'created_at', 'updated_at'],
//     });
//     return res.json({
//         data: product
//     })
// }

// export async function deleteOneProduct(req, res) {
//     const { id } = req.params;
//     const deleteRowCount = await Products.destroy({
//         where:{
//             id,
//         }
//     });
//     return res.json({
//         message:'Product deleted successfully',
//         count: deleteRowCount
//     })
// }

// export async function updateOneProduct(req, res) {
//     const { id } = req.params; 
//     const {
//         name,
//         breakfast,
//         price,
//         created_at,
//         updated_at,
//     } = req.body;

//     const products = await Products.findOne({
//         attributes: ['id', 'name', 'breakfast', 'price', 'created_at', 'updated_at'],
//         where:{
//             id,
//         }   
//     });

//     const product = await products.update({
//         name,
//         breakfast,
//         price,
//         created_at,
//         updated_at,
//     },{
//         where:{id}
//     })
   
//     return res.json({
//         message:'Product updated successfully',
//         data: product
//     })
// }//???tá certo???????????