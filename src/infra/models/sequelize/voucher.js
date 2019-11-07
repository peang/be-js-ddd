const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
    const voucher = sequelize.define('voucher', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        provider_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        highlight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tnc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_public: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        percentage_discount: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0
        },
        min_purchase: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        max_discount: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        max_redeem: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        total_distribution_number: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        total_redeem_amount: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        max_distribution_number: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        max_distribution_amount: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        start_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        expired_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        is_visible: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
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
        tableName: 'voucher',
        freezeTableName: true,
        underscored: true,
        schema: 'promotion'
    });

    voucher.associate = model => {
        voucher.hasMany(model.voucher_distribution, {
            foreignKey: 'voucher_id',
            sourceKey: 'id'
        }),
        voucher.hasMany(model.voucher_rules, {
            foreignKey: 'voucher_id',
            sourceKey: 'id'
        })
    };

    return voucher;
}