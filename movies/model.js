const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define(
  'movie',
  {
    title: {
      type: Sequelize.STRING,
      field: 'Title',
      allowNull: false
    },
    posterUrl: {
      type: Sequelize.STRING,
      field: 'posterUrl',
      allowNull: false
    }
  },

  { timestamp: false, tablename: 'movies' }
)