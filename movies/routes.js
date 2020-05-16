const express = require("express");
const router = express.Router();
const utils = require('./utils');
const query = require('./query');

// - - - - - - - - - - - - - - - - - - - -
//        Routes (/movies)
// - - - - - - - - - - - - - - - - - - - -

router.get('/', (req, res, _next) => {
  // Want to get all the movies AND do the heavy lifting for the frontend
  // of sorting the showtimes and telling the frontend if they have a
  // showtime "coming up" aka within the next 24 hours.

  const rawMovies = query.listMovies();
  const movies = utils.sortMoviesShowtimes(rawMovies);
  let today = new Date();
  movies.forEach((movie) => {
    const futureShowtimes = movie.showtimes.filter(utils.isTimeInFuture);
    const nextShowtime = futureShowtimes[0];
    movie.isComingUp = utils.isShowingInNext24Hours(nextShowtime);
  });
  return res.status(200).json(movies);
});


module.exports = router;