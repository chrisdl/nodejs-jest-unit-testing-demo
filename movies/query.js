// In the real world this would use a database
// for now we will simply return a json list of movies.
// Be advised that this function would almost definitely be asynchronous
// as well. But that really doesn't change very much for this tutorial.
function listMovies() {
  // Difficulty to test?
  // Answer: Harder because it would mean we would need to mock the db.
  return [
  {
    Director: 'Russell Mulcahy',
    IMDB_Rating: 7.2,
    MPAA_Rating: 'R',
    Release_Date: 'Mar 07 1986',
    Title: 'Highlander',
    Showtimes: [
      '2020-05-23T16:31:09.000Z',
      '2020-05-17T06:55:45.000Z',
      '2020-06-05T06:28:25.000Z',
      '2020-05-15T00:59:09.000Z',
      '2020-05-11T10:40:51.000Z',
      '2020-06-26T03:12:56.000Z',
      '2020-06-07T10:36:20.000Z',
      '2020-06-11T02:14:47.000Z',
      '2020-06-14T07:20:45.000Z',
      '2020-06-12T09:16:14.000Z'
    ]
  },
  {
    Director: 'Rick Rosenthal',
    IMDB_Rating: 4.9,
    MPAA_Rating: null,
    Release_Date: 'Oct 30 1981',
    Title: 'Halloween II',
    Showtimes: [
      '2020-06-15T14:17:01.000Z',
      '2020-05-27T22:10:53.000Z',
      '2020-05-15T22:00:17.000Z',
      '2020-06-12T14:47:15.000Z',
      '2020-05-18T16:52:02.000Z',
      '2020-05-17T20:45:41.000Z',
      '2020-06-26T06:07:35.000Z',
      '2020-06-19T15:03:29.000Z',
      '2020-06-16T04:14:40.000Z',
      '2020-05-26T19:32:18.000Z'
    ]
  },
  {
    Director: 'Dwight H. Little',
    IMDB_Rating: 5.6,
    MPAA_Rating: null,
    Release_Date: 'Oct 01 1988',
    Title: 'Halloween 4: The Return of Michael Myers',
    Showtimes: [
      '2020-06-07T06:55:14.000Z',
      '2020-05-18T04:49:45.000Z',
      '2020-05-21T13:51:15.000Z',
      '2020-06-12T05:38:11.000Z',
      '2020-05-21T18:54:40.000Z',
      '2020-06-13T16:04:42.000Z',
      '2020-06-02T07:28:27.000Z',
      '2020-06-23T07:50:41.000Z',
      '2020-06-27T16:10:38.000Z',
      '2020-05-22T21:11:24.000Z'
    ]
  },
  {
    Director: 'John Carpenter',
    IMDB_Rating: 6,
    MPAA_Rating: null,
    Release_Date: 'Oct 17 1978',
    Title: 'Halloween',
    Showtimes: [
      '2020-05-20T13:23:48.000Z',
      '2020-06-17T21:18:36.000Z',
      '2020-06-27T14:46:50.000Z',
      '2020-05-15T09:51:41.000Z',
      '2020-06-07T09:52:12.000Z',
      '2020-05-13T21:30:28.000Z',
      '2020-06-04T16:56:37.000Z',
      '2020-06-28T04:12:13.000Z',
      '2020-05-20T19:16:37.000Z',
      '2020-06-28T05:23:07.000Z'
    ]
  },
  {
    Director: 'Chris Columbus',
    IMDB_Rating: 5.8,
    MPAA_Rating: 'PG',
    Release_Date: 'Nov 20 1992',
    Title: 'Home Alone 2: Lost in New York',
    Showtimes: [
      '2020-06-20T15:47:05.000Z',
      '2020-05-15T15:21:25.000Z',
      '2020-06-11T12:23:30.000Z',
      '2020-06-08T11:10:29.000Z',
      '2020-05-11T19:45:00.000Z',
      '2020-05-14T02:49:05.000Z',
      '2020-06-13T06:47:43.000Z',
      '2020-05-19T08:25:14.000Z',
      '2020-05-31T14:26:39.000Z',
      '2020-06-08T23:20:06.000Z'
    ]
  },
  {
    Director: 'Steven Spielberg',
    IMDB_Rating: 6.2,
    MPAA_Rating: null,
    Release_Date: 'Dec 11 1991',
    Title: 'Hook',
    Showtimes: [
      '2020-05-22T00:25:20.000Z',
      '2020-06-10T19:37:44.000Z',
      '2020-06-26T09:23:32.000Z',
      '2020-06-10T11:41:32.000Z',
      '2020-06-20T02:29:47.000Z',
      '2020-05-10T08:10:12.000Z',
      '2020-05-16T12:35:47.000Z',
      '2020-05-17T22:22:06.000Z',
      '2020-05-22T05:27:12.000Z',
      '2020-06-01T12:13:39.000Z'
    ]
  },
  {
    Director: 'Dennis Dugan',
    IMDB_Rating: 6.9,
    MPAA_Rating: 'PG-13',
    Release_Date: 'Feb 16 1996',
    Title: 'Happy Gilmore',
    Showtimes: [
      '2020-06-15T07:51:42.000Z',
      '2020-06-01T08:32:54.000Z',
      '2020-06-23T09:40:59.000Z',
      '2020-06-29T23:55:00.000Z',
      '2020-05-30T04:39:56.000Z',
      '2020-06-19T03:46:54.000Z',
      '2020-05-31T10:37:28.000Z',
      '2020-06-30T21:34:27.000Z',
      '2020-05-27T22:08:17.000Z',
      '2020-06-07T02:26:35.000Z'
    ]
  },
  {
    Director: 'Joel Coen',
    IMDB_Rating: 7.4,
    MPAA_Rating: 'PG',
    Release_Date: 'Mar 11 1994',
    Title: 'The Hudsucker Proxy',
    Showtimes: [
      '2020-06-13T01:04:38.000Z',
      '2020-06-25T00:19:04.000Z',
      '2020-06-20T08:12:30.000Z',
      '2020-05-22T20:54:39.000Z',
      '2020-06-11T19:34:14.000Z',
      '2020-06-14T21:22:18.000Z',
      '2020-06-08T19:34:38.000Z',
      '2020-06-08T13:41:05.000Z',
      '2020-06-07T15:39:27.000Z',
      '2020-06-19T06:30:39.000Z'
    ]
  },
  {
    Director: 'John McTiernan',
    IMDB_Rating: 7.6,
    MPAA_Rating: null,
    Release_Date: 'Mar 02 1990',
    Title: 'The Hunt for Red October',
    Showtimes: [
      '2020-05-28T22:42:41.000Z',
      '2020-06-07T18:42:04.000Z',
      '2020-06-30T04:24:26.000Z',
      '2020-06-24T22:12:40.000Z',
      '2020-05-28T09:32:12.000Z',
      '2020-05-14T16:44:03.000Z',
      '2020-06-08T16:04:33.000Z',
      '2020-06-05T10:52:41.000Z',
      '2020-05-29T04:32:02.000Z',
      '2020-06-07T07:12:26.000Z'
    ]
  },
  {
    Director: 'Mel Brooks',
    IMDB_Rating: 6.5,
    MPAA_Rating: null,
    Release_Date: 'Dec 23 1977',
    Title: 'High Anxiety',
    Showtimes: [
      '2020-05-20T06:59:05.000Z',
      '2020-05-27T23:00:53.000Z',
      '2020-06-14T09:15:35.000Z',
      '2020-05-21T03:50:20.000Z',
      '2020-06-16T08:24:03.000Z',
      '2020-05-21T01:41:36.000Z',
      '2020-06-08T09:09:56.000Z',
      '2020-06-22T23:47:25.000Z',
      '2020-05-10T04:22:53.000Z',
      '2020-06-15T10:51:23.000Z'
    ]
  },
  {
    Director: 'Roland Emmerich',
    IMDB_Rating: 6.5,
    MPAA_Rating: 'PG-13',
    Release_Date: 'Jul 02 1996',
    Title: 'Independence Day',
    Showtimes: [
      '2020-05-24T04:40:54.000Z',
      '2020-06-16T22:06:26.000Z',
      '2020-05-16T02:42:00.000Z',
      '2020-06-07T23:54:12.000Z',
      '2020-06-08T04:13:51.000Z',
      '2020-06-01T07:34:21.000Z',
      '2020-06-23T17:28:39.000Z',
      '2020-06-10T22:31:54.000Z',
      '2020-05-26T14:10:54.000Z',
      '2020-06-16T06:38:42.000Z'
    ]
  },
  {
    Director: 'John Frankenheimer',
    IMDB_Rating: 4.1,
    MPAA_Rating: 'PG-13',
    Release_Date: 'Aug 23 1996',
    Title: 'The Island of Dr. Moreau',
    Showtimes: [
      '2020-05-21T08:20:32.000Z',
      '2020-06-30T08:43:21.000Z',
      '2020-06-08T07:07:39.000Z',
      '2020-06-14T11:31:07.000Z',
      '2020-05-10T22:12:17.000Z',
      '2020-05-24T17:20:54.000Z',
      '2020-06-22T13:23:34.000Z',
      '2020-05-16T07:36:58.000Z',
      '2020-06-06T19:04:03.000Z',
      '2020-06-02T04:56:54.000Z'
    ]
  }];
}

module.exports = {
  listMovies
};

// How I generated the times for the movies in case anyone cares.
// const times = [
//   "06/13/2020 04:28:11 PM",
//   ...etc
// ]
// let ticker = 0;
// const movies = listMovies()
// for (const movie of movies) {
//   for (var i = 9; i >= 0; i--) {
//     let time = times.pop();
//     let date = new Date(time);
//     movie.Showtimes.push(date.toISOString())
//   }
// }
// console.log(movies)
// I then made the highly technical play of copy pasting them into the listMovies function.