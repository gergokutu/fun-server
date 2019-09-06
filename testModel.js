const Sequelize = require('sequelize')
const db = require('./db')

const TestModel = db.define(
  'testModel',
  {
    title: {
      type: Sequelize.STRING,
      field: 'title',
      allowNull: false
    },
    posterUrl: {
      type: Sequelize.STRING,
      field: 'posterUrl',
      allowNull: false
    }
  },

  { timestamp: false, tablename: 'testTable'}
)

module.exports = TestModel