const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  const taskQuestion = sequelize.define('task_question', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuid.v4()
    },
    task_template_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'task_template',
        key: 'id'
      }
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    example: {
      type: DataTypes.TEXT,
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
    tableName: 'task_question',
    freezeTableName: true,
    underscored: true,
    schema: 'odt'
  });

  taskQuestion.associate = models => {
    taskQuestion.hasMany(models.task_question_option, {
        foreignKey: 'task_question_id',
        sourceKey: 'id',
        as: 'question_option'
    });

    taskQuestion.belongsTo(models.task_template, {
      foreignKey: 'task_template_id'
    });
  };

  return taskQuestion;
};
