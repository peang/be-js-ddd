const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
    const SubmissionAnswer = sequelize.define('submission_answer', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid.v4()
        },
        submission_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'submission',
                key: 'id'
            }
        },
        task_question_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'task_question',
                key: 'id'
            }
        },
        answer: {
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
        tableName: 'submission_answer',
        freezeTableName: true,
        underscored: true,
        schema: 'odt'
    });

    SubmissionAnswer.associate = models => {
        SubmissionAnswer.belongsTo(models.submission, {
            foreignKey: 'submission_id'
        });
    };

    return SubmissionAnswer;
};
