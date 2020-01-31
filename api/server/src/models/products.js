'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN,
    price: {
      type: DataTypes.DECIMAL(10,2),
      get() {
        const value = this.getDataValue('price');
        return value === null ? null : parseFloat(value)
      }
    }
  }, {});
  Product.associate = function(models) {
    //Item.belongsTo(models.Product);
    Product.hasMany(models.Item);
  };
  return Product;
};

//name: ,breakfast: ,price: ,