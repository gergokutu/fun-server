const { Router } = require('express')
const router = new Router()

const Movie = require('./model')

router.get(
  '/movies',
  async (req, res, next) => {
    // const movies = await Movie.findAll()
    const movies = 'WOOOW'
    res.send(movies)
  })

module.exports = router