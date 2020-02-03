'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    TableNumber: DataTypes.INTEGER,
    IsFree: DataTypes.BOOLEAN
  }, {});
  Table.associate = function(models) {
    Table.hasMany(models.Order);
  };
  return Table;
};
