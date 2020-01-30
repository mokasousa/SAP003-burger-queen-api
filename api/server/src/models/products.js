'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN,
    price: DataTypes.DECIMAL
  }, {});
  Product.associate = function(models) {
    //Item.belongsTo(models.Product);
    Product.hasMany(models.Item);
  };
  return Product;
};


// import Sequelize from 'sequelize';
// import { sequelize } from '../database/database';

// const Products = sequelize.define(products, {
//     id: {
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     name: {
//         type: Sequelize.STRING
//       },
//     breakfast: {
//         type: Sequelize.BOOLEAN
//     },
//     price: {
//         type: Sequelize.DECIMAL
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

// export default Products;