'use strict';
const uuid = require('uuid');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const order_bank_info = sequelize.define('order_bank_info', {
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
        receiver_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        account_number: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        account_name: {
            type: DataTypes.STRING(255),
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
        tableName: 'order_bank_info',
        freezeTableName: true,
        underscored: true,
        schema: 'ppob'
    });
    return order_bank_info;
};