const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
    const verification = sequelize.define('verification', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        entity_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nik: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_photo_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        selfie_photo_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        store_photo_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        tableName: 'verification',
        freezeTableName: true,
        underscored: true,
        schema: 'odt'
    });

    return verification;
};
