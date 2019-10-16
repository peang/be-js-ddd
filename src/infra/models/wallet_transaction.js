'use strict';

const uuid = require('uuid');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const walletTransation = sequelize.define('wallet_transactions', {
        id: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        entity_id: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        order_id: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        remarks: {
            type: DataTypes.STRING(255)
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        balance: {
            type: DataTypes.FLOAT,
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
            tableName: 'wallet_transactions',
            freezeTableName: true,
            underscored: true,
            schema: 'ppob'
        });

    return walletTransation;
};