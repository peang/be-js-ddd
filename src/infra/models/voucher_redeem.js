const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
    const voucher_redeem = sequelize.define('voucher_redeem', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        distribution_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'voucher_distribution',
                key: 'id'
            }
        },
        used_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        cancelled_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
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
        tableName: 'voucher_redeem',
        freezeTableName: true,
        underscored: true,
        schema: 'promotion'
    });

    voucher_redeem.associate = model => {
        voucher_redeem.belongsTo(model.voucher, {
            foreignKey: 'voucher_id'
        })
    };

    return voucher_redeem;
}