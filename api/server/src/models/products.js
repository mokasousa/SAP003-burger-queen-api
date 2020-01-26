//criar migrations 

import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

// id
// name
// breakfast
// price
// created_at
// updated_at

const Products = sequelize.define(products, {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
      },
    breakfast: {
        type: Sequelize.BOOLEAN
    },
    price: {
        type: Sequelize.DECIMAL
    },
    created_at: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updated_at: {
        allowNull: false,
        type: Sequelize.DATE
    }
}, {
    timestamps:true
});

export default Products;