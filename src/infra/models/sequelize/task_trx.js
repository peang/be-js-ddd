const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  const task_trx = sequelize.define('task_trx', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuid.v4()
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'project',
        key: 'id'
      }
    },
    task_template_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'task_template',
        key: 'id'
      }
    },
    target_responden_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'target_responden',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nominal: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    reward_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reward_expired: {
      type: DataTypes.DATE,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    limit_responden: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_response: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_responden: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    approved_by: {
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
    tableName: 'task_trx',
    freezeTableName: true,
    underscored: true,
    schema: 'odt'
  });

  task_trx.associate = models => {
    task_trx.hasMany(models.submission, {
        foreignKey: 'task_trx_id',
        sourceKey: 'id'
    });

    task_trx.belongsTo(models.task_template, {
      foreignKey: 'task_template_id'
    });

    task_trx.belongsTo(models.target_responden, {
      foreignKey: 'target_responden_id',
      sourceKey: 'id'
    });
  }

  return task_trx;
};
