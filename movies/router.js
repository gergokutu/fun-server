const { Router } = require('express')
const router = new Router()

const Movie = require('./model')

const request = require('superagent')

router.get(
  '/movies',
  async (req, res, next) => {
    try {
    const movies = await Movie.findAll()
    res.send(movies)
    } catch (error) {
      console.error(error)
    }
  })

  // I need movie posters for the memory cards » db
  // POST!!!

router.post(
  '/movies',
  async (req, res, next) => {
    const movie = await Movie.findOrCreate({ where: {title: req.body.title, posterUrl: req.body.posterUrl} })
    res.send(movie)
  }
)

module.exports = router