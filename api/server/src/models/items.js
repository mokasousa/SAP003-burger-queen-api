'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    ProductId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    StatusItem: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.Order);
    Item.belongsTo(models.Product);
  };
  return Item;
};
