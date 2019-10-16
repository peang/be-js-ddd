const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
    const task_template = sequelize.define('task_template', {
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tnc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        instruction: {
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
        tableName: 'task_template',
        freezeTableName: true,
        underscored: true,
        schema: 'odt'
    });

    task_template.associate = models => {
        task_template.hasMany(models.task_trx, {
            foreignKey: 'task_template_id',
            sourceKey: 'id'
        });

        task_template.hasMany(models.task_question, {
            foreignKey: 'task_template_id',
            sourceKey: 'id'
        });

        task_template.belongsTo(models.principal, {
            foreignKey: 'principal_id'
        });
    };

    return task_template;
};
