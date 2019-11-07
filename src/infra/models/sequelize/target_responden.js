const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
    const Target = sequelize.define('target_responden', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        principal_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'principal',
                key: 'id'
            }
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        wholesaler_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region: {
            type: DataTypes.STRING,
            allowNull: true
        },
        product: {
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
        tableName: 'target_responden',
        freezeTableName: true,
        underscored: true,
        schema: 'odt'
    });

    Target.associate = (models) => {
        Target.belongsTo(models.principal, {
            foreignKey: 'principal_id',
            targetKey: 'id',
            as: 'principal'
        });

        Target.hasMany(models.target_user, {
            foreignKey: 'responden_id',
            targetKey: 'id',
            as: 'users'
        });
    };

    return Target;
};
