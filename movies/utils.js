function sortShowtimes(a, b) {
  a = new Date(a);
  b = new Date(b);
  // alt: return a - b
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// Because we pass in the now param (for testing)
// this function is not as easy to pass in to a filter function.
// which is unfortunate.
function isTimeInFuture(ISO8601String, now) {
  now = now instanceof Date ? now : new Date();
  const time = new Date(ISO8601String);

  // How can we check that we remembered this correctly? (unit tests)
  // in walkthrough do it wrong...
  return time - now > 0;
}

function sortMoviesShowtimes(movies) {
  // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  // const moviesCopy = movies.slice();
  // const moviesCopy = movies.map(x => x);
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  for (const movie of moviesCopy) {
    movie.showtimes.sort(sortShowtimes);
  }
  return moviesCopy;
}

function isShowingInNext24Hours(showtime, now) {
  now = now instanceof Date ? now : new Date();
  const show = new Date(showtime);
  const diff = show - now;
  // console.log({
  //   diff,
  //   seconds: diff / 1000, // ms to s
  //   minutes: diff / 1000 / 60, // ms to mins
  //   hours: diff / 1000 / 60 / 60 // ms to hrs
  // })
  // return diff > 0; // only checks if it "is in future"
  return diff <= 86400000 && diff >= 0;
}

module.exports = {
  sortShowtimes,
  isTimeInFuture,
  sortMoviesShowtimes,
  isShowingInNext24Hours
};


// Source: MDN
// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }