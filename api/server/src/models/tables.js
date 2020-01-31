'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    TableNumber: DataTypes.INTEGER,
    IsFree: DataTypes.BOOLEAN
  }, {});
  Table.associate = function(models) {
    //Order.belongsTo(models.Table)
    Table.hasMany(models.Order)
  };
  return Table;
};
//TableNumber:, IsFree:
