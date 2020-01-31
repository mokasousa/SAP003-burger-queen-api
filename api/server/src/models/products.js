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

//name: ,breakfast: ,price: ,