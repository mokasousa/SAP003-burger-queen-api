import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Authors from './authors'

const Publishers = sequelize.define(publishers, {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
      },
    address: {
        type: Sequelize.STRING
      },
    created_at: {
        allowNull: false,
        type: Sequelize.DATE
    }
}, {
    timestamps:false
});

Publishers.hasMany(Authors, { foreingKey:'publisherId', sourceKey:'id'});
Authors.belongsTo(Publishers, { foreingKey:'publisherId', sourceKey:'id'});

export default Publishers;