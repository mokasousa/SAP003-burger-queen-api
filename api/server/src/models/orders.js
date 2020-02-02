'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    TableId: DataTypes.INTEGER,
    StatusOrder: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Item.belongsTo(models.Order);
    Order.hasMany(models.Item);
  };
  return Order;
};
