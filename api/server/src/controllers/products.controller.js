import Products from '../models/products';

// id
// name
// breakfast
// price
// created_at
// updated_at

export async function getProducts(req, res) {
    const {
        id,
        name,
        breakfast,
        price,
        created_at,
        updated_at,
    } = req.body;

    const products = await Products.findAll({
        attributes:['id', 'name', 'breakfast', 'price', 'created_at', 'updated_at'],
        order: [
            ['name', 'ASC']
        ]
    })
    return res.json({products})

}

export async function createProduct(req, res) {
    const {
        name,
        breakfast,
        price,
        created_at,
        updated_at
    } = req.body;

    try {
        let newProduct = await Products.create({
            name,
            breakfast,
            price,
            created_at,
            updated_at
        }, {
            fields: ['name', 'breakfast', 'price', 'created_at', 'updated_at']
        });
        if (newProduct) {
            return res.json({
                message: 'Product created successfully',
                data: newProduct
            });
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'Something went wrong',
            data: {}
        })
    }
}

export async function getOneProduct(req, res) {
    const { id } = req.params; // req.params -> n. in api/orders/n.
    const product = await Products.findOne({
        where:{
            id
        },
        attributes:['id', 'name', 'breakfast', 'price', 'created_at', 'updated_at'],
    });
    return res.json({
        data: product
    })
}

export async function deleteOneProduct(req, res) {
    const { id } = req.params;
    const deleteRowCount = await Products.destroy({
        where:{
            id,
        }
    });
    return res.json({
        message:'Product deleted successfully',
        count: deleteRowCount
    })
}

export async function updateOneProduct(req, res) {
    const { id } = req.params; 
    const {
        name,
        breakfast,
        price,
        created_at,
        updated_at,
    } = req.body;

    const products = await Products.findOne({
        attributes: ['id', 'name', 'breakfast', 'price', 'created_at', 'updated_at'],
        where:{
            id,
        }   
    });

    const product = await products.update({
        name,
        breakfast,
        price,
        created_at,
        updated_at,
    },{
        where:{id}
    })
   
    return res.json({
        message:'Author updated successfully',
        data: product
    })
}//???tá certo???????????