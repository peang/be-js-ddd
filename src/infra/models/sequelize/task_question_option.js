const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  const QuestionOption = sequelize.define('task_question_option', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuid.v4()
    },
    task_question_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'task_question',
        key: 'id'
      }
    },
    name: {
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
    tableName: 'task_question_option',
    freezeTableName: true,
    underscored: true,
    schema: 'odt'
  });

  QuestionOption.associate = (models) => {
    QuestionOption.belongsTo(models.task_question, {
        foreignKey: 'task_question_id',
        targetKey: 'id',
        as: 'question'
    });
  };

  return QuestionOption;
};
