'use strict';
const uuid = require('uuid');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const bca_mutation_log = sequelize.define('bca_mutation_log', {
        id: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        order_id: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        transaction_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        branch_code: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        transaction_type: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        transaction_amount: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        transaction_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        trailer: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        created_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: true,
            type: DataTypes.DATE
        }
    }, {
        tableName: 'bca_mutation_log',
        freezeTableName: true,
        underscored: true,
        schema: 'ppob'
    });
    return bca_mutation_log;
};