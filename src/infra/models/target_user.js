const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  const target_user = sequelize.define('target_user', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuid.v4()
    },
    entity_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    responden_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'target_responden',
        key: 'id'
      }
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
    tableName: 'target_user',
    freezeTableName: true,
    underscored: true,
    schema: 'odt'
  });

  target_user.associate = models => {
    target_user.hasMany(models.submission, {
        foreignKey: 'target_user_id',
        sourceKey: 'id'
    });
  }

  return target_user;
};
