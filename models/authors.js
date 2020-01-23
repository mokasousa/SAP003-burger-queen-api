import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Authors = sequelize.define(authors, {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
      },
    is_alive: {
        type: Sequelize.BOOLEAN
      },
    created_at: {
        allowNull: false,
        type: Sequelize.DATE
    },//!!!!!!!!!!!!!!!!!
    publisher_id: {
        type: Sequelize.INTEGER
    }//!!!!!!!!!!!!!!!!!!
}, {
    timestamps:false
});

export default Authors;