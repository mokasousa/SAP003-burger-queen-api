'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    tableId: DataTypes.INTEGER,
    statusOrder: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    //Item.belongsTo(models.Order);
    Order.hasMany(models.Item);
  };
  return Order;
};




// import Sequelize from 'sequelize';
// import { sequelize } from '../database/database';
// import Items from './items'

// // id          
// // table        
// // status_order 
// // created_at   
// // updated_at  

// const Orders = sequelize.define(orders, {
//     id: {
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     table: {
//         type: Sequelize.INTEGER
//       },
//     status_order: {
//         type: Sequelize.STRING
//     },
//     created_at: {
//         allowNull: false,
//         type: Sequelize.DATE
//     },
//     updated_at: {
//         allowNull: false,
//         type: Sequelize.DATE
//     }
// }, {
//     timestamps:true
// });

// Orders.hasMany(Items, { foreingKey:'order_id', sourceKey:'id'});
// Items.belongsTo(Authors, { foreingKey:'order_id', sourceKey:'id'});

// export default Orders;