
//criar migrations
import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Products from './products'

const Items = sequelize.define(items, {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    status_item: {
        type: Sequelize.STRING
    },
    product_id: {
        type: Sequelize.INTEGER
    },
    order_id: {
        type: Sequelize.INTEGER
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
}, {
    timestamps:true
});

Items.hasMany(Products, { foreingKey:'product_id', sourceKey:'id'});
Products.belongsTo(Items, { foreingKey:'product_id', sourceKey:'id'});

export default Items;

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Author = sequelize.define('Author', {
//     name: DataTypes.STRING,
//     is_alive: DataTypes.BOOLEAN
//   }, {});
//   Author.associate = function(models) {
//     // associations can be defined here
//   };
//   return Author;
// };


// module.exports = (sequelize, DataTypes) => {
//     const Book = sequelize.define('Book', {
//       title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       price: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       description: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     });
//     return Book;
//   };