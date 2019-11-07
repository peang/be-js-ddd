const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  const submission = sequelize.define('submission', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuid.v4()
    },
    target_user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'target_user',
        key: 'id'
      }
    },
    task_trx_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'task_trx',
        key: 'id'
      }
    },
    submitted_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checked_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    checked_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
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
    tableName: 'submission',
    freezeTableName: true,
    underscored: true,
    schema: 'odt'
  });

  submission.associate = models => {
    submission.belongsTo(models.task_trx, {
      foreignKey: 'task_trx_id'
    });

    submission.hasMany(models.submission_answer, {
      foreignKey: 'submission_id',
      targetKey: 'id',
      as: 'answers'
    });

    submission.belongsTo(models.target_user, {
      foreignKey: 'target_user_id',
      targetKey: 'id'
    });

    submission.hasMany(models.submission_answer, {
      foreignKey: 'submission_id',
      targetKey: 'id'
    });
  };

  return submission;
};
