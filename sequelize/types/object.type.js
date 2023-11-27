const { DataTypes } = require('sequelize');

function objectType(fieldName) {
  return {
    type: DataTypes.JSON,
    get() {
      const rawValue = this.getDataValue(fieldName);
      try {
        return rawValue ? JSON.parse(rawValue) : null;
      } catch (e) {
        console.error(`Error parsing JSON for ${fieldName}:`, e);
        return rawValue || [];
      }
    },
    set(value) {
      this.setDataValue(fieldName, JSON.stringify(value));
    }
  };
}

module.exports = {
    objectType
};
