'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    productsId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    statusItem: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    
  };
  return Item;
};




// import Sequelize from 'sequelize';
// import { sequelize } from '../database/database';
// import Products from './product-m'

// const Items = sequelize.define(items, {
//     id: {
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     status_item: {
//         type: Sequelize.STRING
//     },
//     product_id: {
//         type: Sequelize.INTEGER
//     },
//     order_id: {
//         type: Sequelize.INTEGER
//     },
//     created_at: {
//         type: Sequelize.DATE
        
//     },
//     updated_at: {
//         type: Sequelize.DATE
//     },
// }, {
//     timestamps:true
// });

// Items.hasMany(Products, { foreingKey:'product_id', sourceKey:'id'});
// Products.belongsTo(Items, { foreingKey:'product_id', sourceKey:'id'});

// export default Items;

