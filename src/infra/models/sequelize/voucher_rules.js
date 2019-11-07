const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
    const voucher_rules = sequelize.define('voucher_rules', {
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
        product_barcode: {
            type: DataTypes.STRING,
            allowNull: true
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
        tableName: 'voucher_rules',
        freezeTableName: true,
        underscored: true,
        schema: 'promotion'
    });

    voucher_rules.associate = model => {
        voucher_rules.belongsTo(model.voucher, {
            foreignKey: 'voucher_id'
        })
    };

    return voucher_rules;
}