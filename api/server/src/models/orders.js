'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    TableId: DataTypes.INTEGER,
    StatusOrder: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Item);
    Order.belongsTo(models.Table);
  };
  return Order;
};
