const uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  const principal = sequelize.define('principal', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuid.v4()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pic_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pic_position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pic_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
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
    tableName: 'principal',
    freezeTableName: true,
    underscored: true,
    schema: 'odt'
  });

  principal.associate = models => {
    principal.hasMany(models.task_template, {
        foreignKey: 'principal_id',
        sourceKey: 'id'
    });
  };

  return principal;
};
