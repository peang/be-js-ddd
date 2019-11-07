const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
    const voucher_distribution = sequelize.define('voucher_distribution', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        voucher_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'voucher',
                key: 'id'
            }
        },
        entity_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        number_redeem: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        number_distribution: {
            type: DataTypes.NUMBER,
            allowNull: true,
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
    }, {
        tableName: 'voucher_distribution',
        freezeTableName: true,
        underscored: true,
        schema: 'promotion'
    });

    voucher_distribution.associate = model => {
        voucher_distribution.belongsTo(model.voucher, {
            foreignKey: 'voucher_id'
        })
    };

    return voucher_distribution;
}