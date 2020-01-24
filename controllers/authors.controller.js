import Authors from '../models/authors';

export async function getAuthors(req, res) {
    const {
        name,
        is_alive,
        created_at,
        publisher_id
    } = req.body;

    const authors = await Authors.findAll({
        attributes:['id', 'name', 'created_at', 'is_alive', 'publisher_id'],
        order: [
            ['id', 'DESC']
        ]
    })
    return res.json({authors})

}//ok

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
            fields: ['name', 'is_alive', 'created_at', publisher_id]
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
    const author = await Authors.findOne({
        where:{
            id
        },
        attributes:['name', 'is_alive', 'created_at', 'publisher_id']
    });
    return res.json({
        data: author
    })
}//ok

export async function deleteOneAuthor(req, res) {
    const { id } = req.params; // req.params -> n. in api/publishers/n.
    const deleteRowCount = await Authors.destroy({
        where:{
            id,
        }
    });
    return res.json({
        message:'Author deleted successfully',
        count: deleteRowCount
    })
}//ok

export async function updateOneAuthor(req, res) {
    const { id } = req.params; 
    const {
        name,
        is_alive,
        created_at,
        publisher_id
    } = req.body;

    const authors = await Authors.findOne({
        attributes: ['id', 'name', 'is_alive', 'created_at', 'publisher_id'],
        where:{
            id,
        }   
    });

    const author = await Authors.update({
        name,
        is_alive,
        created_at,
        publisher_id
    },{
        where:{id}
    })
   
    return res.json({
        message:'Author updated successfully',
        data: author
    })
}//ok

export async function getAuthorsByPublisher (req, res) {
    const { publisher_id } = req.params;
    const authors = await Authors.findAll({
        attributes: ['id', 'name', 'is_alive', 'created_at', 'publisher_id'],
        where:{publisher_id}
    });
    res.json({authors})
}