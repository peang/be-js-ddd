'use strict';

const uuid = require('uuid');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const wallet = sequelize.define('wallet', {
        id: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        entity_id: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
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
        tableName: 'wallet',
        freezeTableName: true,
        underscored: true,
        schema: 'ppob'
    });

    return wallet;
};