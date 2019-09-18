const { Router } = require('express')
const router = new Router()

const request = require('superagent')

const Movie = require('./model')

// http GET 'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=377f16c90eeda4700f91c1925bbe3668'
// "base_url": "http://image.tmdb.org/t/p/",
// "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
//   ],

router.get(
  '/copy-movies',
  async (req, res, next) => {
    const base_url = 'http://image.tmdb.org/t/p/'
    const size = '/w185'

    try {
      const movies = await request.get('https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=377f16c90eeda4700f91c1925bbe3668')
      const posters = movies.body.results.map(poster => base_url.concat(size.concat(poster.poster_path)))
      // how to get the original_title as well from tmdb...
      // how to fill up Movie model » posterUrl from an array
      // const posterToDb = await Movie.findOrCreate({ where: { posterUrl: posters } })
      res.send(posters)

    } catch (error) {
      next(error)
    }
  }
)

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
    try {
      const movieToChange = await Movie.findOne({ where: { id: req.params.id } })
      if (movieToChange) {
        movieToChange.update(req.body)
        res.send(movieToChange)
      } else {
        res.status(404).end()
      }
    } catch (error) {
      next(error)
    }
  }
)

// Delete » destroy
router.delete(
  '/movies/:id',
  async (req, res, next) => {
    try {
      const movieToDelete = await Movie.destroy({ where: { id: req.params.id } })
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