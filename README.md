# Movie - Server
Server side of the Movie application. The necessary information is requested from the TMDB API and uploaded to the PostgresSQL database of the app. Pagination resolved by the `router.get('/copy-movies')` endpoint.

## Project Structure
The project was developed by using Node.js.

## Deployment 
This project is currently deployed with Heroku and available with the latest master version here: [movie-server](https://movie-server-db.herokuapp.com)

    
## Technologies used
- Express.js: to expose the REST services
- Cors: to allow different host to consume the exposed service
- PostgreSQL: to store necessary data about users and the game
- Docker: to create a separate container for the database

## Setup
Please note that in order to run the server locally you must also start a Postgres container
using the following commands:

```bash
$ docker run -p 5432:5432 --name movie -e POSTGRES_PASSWORD=secret -d postgres
```
You also need to run the following commands:

```bash
$ git clone
```
```bash
$ npm install
```
```bash
$ npm run dev
```

It will start the node server on the port `4000`

### Endpoints
You can find all the endpoints in the `./movies/router.js` file. Endpoints is created by following the RESTful principles.

- router.get('/copy-movies') >> copy necessary info through the TMDB API and uploads it into the applications database, resolves the pagination

Other eindpoints created for practice reason but not used by the client-side at the moment:
- router.get('/movies') >> list the movies can be found in the database
- router.post('/movies') >> create movie entity manually
- router.put('/movies/:id') >> update a movie entity manually by its ID
- router.post('/movies/:id') >> delete a movie entity manually by its ID



