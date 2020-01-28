'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    tableNumber: DataTypes.INTEGER,
    isFree: DataTypes.BOOLEAN
  }, {});
  Table.associate = function(models) {
    //Order.belongsTo(models.Table)
    Table.hasMany(models.Order)
  };
  return Table;
};

