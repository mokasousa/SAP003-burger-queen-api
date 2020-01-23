import Authors from '../models/authors';

export async function getAuthors(req, res) {
    const authors = await Authors.findAll({
        attributes:['id', 'name', 'created_at', 'is_alive', 'publisher_id'],
        order: [
            ['']
        ]
    })

    try {
        const authors = await Authors.findAll()
        return res.json({
            data: authors
        })
    } catch (e) {
        console.log(e)
    };
}

export async function createAuthor(req, res) {
    const {
        name,
        is_alive,
        created_at,
        publisher_id
    } = req.body;

    try {
        let newAuthor = await Authors.create({
            name,
            is_alive,
            created_at,
            publisher_id
        }, {
            fields: ['name', 'is_alive', 'created_at']
        });
        if (newAuthor) {
            return res.json({
                message: 'Author created successfully',
                data: newAuthor
            });
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'something went wrong',
            data: {}
        })
    }
}//ok

export async function getOneAuthor(req, res) {
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

export async function deleteOneAuthor(req, res) {
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

export async function updateOneAuthor(req, res) {
    const { id } = req.params; 
    const {
        name,
        address,
        createdAt
    } = req.body;

    const publishers = await Publishers.findAll({
        attributes: ['id', 'name', 'address', 'createdAt'],
        where:{
            id,
        }
    });
    if(publishers.length > 0){
        publishers.forEach(async pub => {
            await pub.update({
                name,
                address,
                createdAt
            })
        })
    }
    return res.json({
        message:'Publisher updated successfully',
        data: publishers
    })
}

export function getAuthorByPublisher (req, res) {

}