const { Router } = require('express')
const router = new Router()

const Movie = require('./model')

// const request = require('superagent')

router.get(
  '/movies',
  async (req, res, next) => {
    try {
      const movies = await Movie.findAll()
      res.send(movies)
    } catch (error) {
       next(error)
    }
  }
)

// I need movie posters for the memory cards » db
// POST!!!
router.post(
  '/movies',
  async (req, res, next) => {
    try {
      const movie = await Movie.findOrCreate({ 
        where: {
          title: req.body.title, 
          posterUrl: req.body.posterUrl
        } 
      })
      res.send(movie)
    } catch (error) {
        next(error)
    }
  }
)

// Update » put (whole entity) vs patch (part)
router.put(
  '/movies/:id',
  async (req, res, next) => {
    // const movieToChange = await Movie...
  }
)

// Delete » destroy
router.delete(
  '/movies/:id',
  async (req, res, next) => {
    try {
      const movieToDelete = await Movie.destroy({ where: {id: req.params.id} })
      if (movieToDelete) {
        res.status(204).end()
      }
      res.status(404).end()
    } catch (error) {
        next(error)
    }
  }
)

module.exports = router