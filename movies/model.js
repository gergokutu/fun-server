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
    },
    overview: {
      type: Sequelize.TEXT,
      field: 'overview',
      allowNull: false
    },
    rate: {
      type: Sequelize.STRING,
      field: 'rate',
      allowNull: false
    },
    votes: {
      type: Sequelize.STRING,
      field: 'votes',
      allowNull: false
    },
    release: {
      type: Sequelize.STRING,
      field: 'release',
      allowNull: false
    }
  },

  { timestamps: false, tableName: 'movies' }
)

module.exports = Movie