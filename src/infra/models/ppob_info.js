'use strict';

const uuid = require('uuid');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const ppob_info = sequelize.define('ppob_info', {
        id: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        provider: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        product_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        internal_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING(255),
        },
        type: {
            type: DataTypes.STRING(255),
        },
        nominal: {
            type: DataTypes.FLOAT,
        },
        margin: {
            type: DataTypes.FLOAT,
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
        tableName: 'ppob_infos',
        freezeTableName: true,
        underscored: true,
        schema: 'ppob'
    });
    return ppob_info;
};