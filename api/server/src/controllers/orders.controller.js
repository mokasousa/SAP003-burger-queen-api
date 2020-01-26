import Orders from '../models/orders';

//req.body -> fetched data when user visits this route

// id          
// table        
// status_order 
// created_at   
// updated_at  

export async function getOrders(req, res) {
    const {
        table,     
        status_order,
        created_at,
        updated_at 
    } = req.body;

    try {
        const orders = await Orders.findAll()
        return res.json({
            data: orders
        })
    } catch (e) {
        console.log(e)
    };
}

export async function createOrder(req, res) {
    const {
        table,     
        status_order,
        created_at,
        updated_at 
    } = req.body;

    try {
        let newOrder = await Orders.create({
            table,     
            status_order,
            created_at,
            updated_at
        }, {
            fields: ['table', 'status_order', 'created_at', 'updated_at']
        });
        if (newOrder) {
            return res.json({
                message: 'Order created successfully',
                data: newOrder
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

export async function getOneOrder(req, res) {
    const { id } = req.params; // req.params -> n. in api/orders/n.
    const order = await Orders.findOne({
        where:{
            id,
        }
    });
    return res.json({
        data: order
    })
}

export async function deleteOneOrder(req, res) {
    const { id } = req.params;
    const deleteRowCount = await Orders.destroy({
        where:{
            id,
        }
    });
    return res.json({
        message:'Order deleted successfully',
        count: deleteRowCount
    })
}

export async function updateOneOrder(req, res) {
    const { id } = req.params; 
    const {
        table,     
        status_order,
        created_at,
        updated_at 
    } = req.body;

    const orders = await Orders.findOne({
        attributes: ['id', 'table', 'status_order', 'created_at', 'updated_at'],
        where:{
            id,
        }
    });
    if(orders.length > 0){
        orders.forEach(async order => {
            await order.update({
                table,     
                status_order,
                created_at,
                updated_at 
            })
        })
    }
    return res.json({
        message:'Order updated successfully',
        data: orders
    })
}