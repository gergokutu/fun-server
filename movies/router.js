const { Router } = require('express')
const router = new Router()

const Movie = require('./model')

const request = require('superagent')

// I need movie posters for the memory cards through any API
// check themoviedb.org first
router.get(
  '/movies',
  async (req, res, next) => {
    try {
    // const data = await axios.get(`${baseURL}/jobs?limit=100000`)
    const movies = await Movie.findAll()
    res.send(movies)
    } catch (error) {
      console.error(error)
    }
  })

module.exports = router