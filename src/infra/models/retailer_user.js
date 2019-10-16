'use strict';

const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const retailer = sequelize.define('retailer_user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        user_id: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        entity_id: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        pin: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        is_account_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_profile_completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        img: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        refresh_token: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        refresh_expires: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            type: DataTypes.DATE
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            type: DataTypes.DATE
        }
    }, {
        tableName: 'retailer_user',
        freezeTableName: true,
        underscored: true,
        schema: 'entity'
    });

    return retailer;
};