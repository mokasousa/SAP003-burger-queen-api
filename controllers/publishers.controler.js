import Publishers from '../models/publishers';

//req.body -> fetched data when user visits this route

export async function getPublishers(req, res) {
    // const {
    //     name,
    //     address,
    //     created_at
    // } = req.body;
    try {
        const publishers = await Publishers.findAll()
        return res.json({
            data: publishers
        })
    } catch (e) {
        console.log(e)
    };
}

export async function createPublisher(req, res) {
    const {
        name,
        address,
        created_at
    } = req.body;

    try {
        let newPublisher = await Publishers.create({
            name,
            address,
            created_at
        }, {
            fields: ['name', 'address', 'created_at']
        });
        if (newPublisher) {
            return res.json({
                message: 'Publisher created successfully',
                data: newPublisher
            });
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'something went wrong',
            data: {}
        })
    }
}

export async function getOnePublisher(req, res) {
    const { id } = req.params; // req.params -> n. in api/publishers/n.
    const publisher = await Publishers.findOne({
        where:{
            id,
        }
    });
    return res.json({
        data: publisher
    })
}

export async function deleteOnePublisher(req, res) {
    const { id } = req.params; // req.params -> n. in api/publishers/n.
    const deleteRowCount = await Publishers.destroy({
        where:{
            id,
        }
    });
    return res.json({
        message:'Publisher deleted successfully',
        count: deleteRowCount
    })
}

export async function updateOnePublisher(req, res) {
    const { id } = req.params; 
    const {
        name,
        address,
        created_at
    } = req.body;

    const publishers = await Publishers.findOne({
        attributes: ['id', 'name', 'address', 'created_at'],
        where:{
            id,
        }
    });
    if(publishers.length > 0){
        publishers.forEach(async pub => {
            await pub.update({
                name,
                address,
                created_at
            })
        })
    }
    return res.json({
        message:'Publisher updated successfully',
        data: publishers
    })
}