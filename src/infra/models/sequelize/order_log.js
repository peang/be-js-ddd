'use strict';
const uuid = require('uuid');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const orders_log = sequelize.define('orders_log', {
        id: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        order_id: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: moment.now()
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: moment.now()
        }
    }, {
        tableName: 'orders_log',
        freezeTableName: true,
        underscored: true,
        schema: 'ppob'
    });
    return orders_log;
};