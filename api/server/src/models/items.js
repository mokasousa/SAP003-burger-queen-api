'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    ProductId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    StatusItem: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // Item.belongsTo(models.Order);
    // Item.belongsTo(models.Product);
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

