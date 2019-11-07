'use strict';
const uuid = require('uuid');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('orders', {
        id: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        transaction_id: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        entity_id: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_nominal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        customer_number: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        customer_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        payment_method: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_order: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        order_status: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        tableName: 'orders',
        freezeTableName: true,
        underscored: true,
        schema: 'ppob'
    });

    return order;
};