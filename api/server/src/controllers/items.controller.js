import Items from '../models/items';

// id
// status_item
// product_id
// order_id
// created_at
// updated_at

export async function getItems(req, res) {
    const {
        id,
        status_item,
        products_id,
        order_id,
        created_at,
        updated_at,
    } = req.body;

    const items = await Items.findAll({
        attributes:['id', 'status_item', 'products_id', 'order_id', 'created_at', 'updated_at'],
        order: [
            ['id', 'DESC']
        ]
    })
    return res.json({items})

}

export async function createItem(req, res) {
    const {
        status_item,
        product_id,
        order_id,
        created_at
    } = req.body;

    try {
        let newItem = await Items.create({
            status_item,
            product_id,
            order_id,
            created_at
        }, {
            fields: ['status_item', 'product_id', 'order_id', 'created_at']
        });
        if (newItem) {
            return res.json({
                message: 'Item added successfully',
                data: newItem
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

export async function getOneItem(req, res) {
    const { id } = req.params; // req.params -> n. in api/orders/n.
    const item = await Items.findOne({
        where:{
            id
        },
        attributes:['status_item', 'product_id', 'order_id', 'created_at', 'updated_at']
    });
    return res.json({
        data: item
    })
}//???retirar esse???

export async function deleteOneItem(req, res) {
    const { id, order_id } = req.params;
    const deleteRowCount = await Items.destroy({
        where:{
            id,
            order_id
        }
    });
    return res.json({
        message:'Item deleted successfully',
        count: deleteRowCount
    })
}

export async function updateOneItem(req, res) {
    const { id } = req.params; 
    const {
        status_item,
        products_id,
        order_id,
        created_at,
        updated_at,
    } = req.body;

    const items = await Items.findOne({
        attributes: ['id', 'status_item', 'products_id', 'order_id', 'created_at', 'updated_at'],
        where:{
            id,
        }   
    });

    const item = await Items.update({
        status_item,
        products_id,
        order_id,
        created_at,
        updated_at,
    },{
        where:{id}
    })
   
    return res.json({
        message:'Author updated successfully',
        data: item
    })
}//???retirar esse???

export async function getItemsByOrder (req, res) {
    const { order_id } = req.params;
    const items = await Items.findAll({
        attributes: ['id', 'status_item', 'products_id', 'order_id', 'created_at', 'updated_at'],
        where:{order_id}
    });
    res.json({items})
}