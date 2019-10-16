'use strict';

const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const retailer = sequelize.define('retailer_banner', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: () => uuid.v4()
            },
            entity_id: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            url: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
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
        tableName: 'retailer_banner',
        freezeTableName: true,
        underscored: true,
        schema: 'entity'
    });

    return retailer;
};