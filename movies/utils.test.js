const {
  sortShowtimes,
  sortMoviesShowtimes,
  isShowingInNext24Hours,
  isTimeInFuture
} = require('./utils');

describe('sortShowtimes', () => {
  test('No showtimes', () => {
    const expected = [].sort(sortShowtimes);
    expect(expected).toEqual([]);
  });

  test('1 showtime', () => {
    const times = ['2020-05-23T16:31:09.000Z'];
    const expected = times.sort(sortShowtimes);
    expect(expected).toEqual(times);
  });

  test('2 showtimes', () => {
    const times = [
      '2020-05-17T12:00:00.000Z',
      '2020-05-17T06:00:00.000Z'
    ];
    const expected = times.sort(sortShowtimes);
    expect(expected).toEqual([
      '2020-05-17T06:00:00.000Z',
      '2020-05-17T12:00:00.000Z'
    ]);
  });

  test('3 showtimes (and 2 are the same)', () => {
    const times = [
      '2020-05-17T12:00:00.000Z',
      '2020-05-17T06:00:00.000Z',
      '2020-05-17T12:00:00.000Z'
    ];
    const expected = times.sort(sortShowtimes);
    expect(expected).toEqual([
      '2020-05-17T06:00:00.000Z',
      '2020-05-17T12:00:00.000Z',
      '2020-05-17T12:00:00.000Z'
    ]);
  });

  test('10 showtimes', () => {
    const times = [
      '2020-05-23T16:31:09.000Z',
      '2020-05-17T06:55:45.000Z',
      '2020-06-05T06:28:25.000Z',
      '2020-05-15T00:59:09.000Z',
      '2020-05-11T10:40:51.000Z',
      '2020-06-26T03:12:56.000Z',
      '2020-06-07T10:36:20.000Z',
      '2020-06-07T02:14:47.000Z',
      '2020-06-14T07:20:45.000Z',
      '2020-06-12T09:16:14.000Z'
    ];
    const expected = times.sort(sortShowtimes);
    expect(expected).toEqual([
      '2020-05-11T10:40:51.000Z',
      '2020-05-15T00:59:09.000Z',
      '2020-05-17T06:55:45.000Z',
      '2020-05-23T16:31:09.000Z',
      '2020-06-05T06:28:25.000Z',
      '2020-06-07T02:14:47.000Z',
      '2020-06-07T10:36:20.000Z',
      '2020-06-12T09:16:14.000Z',
      '2020-06-14T07:20:45.000Z',
      '2020-06-26T03:12:56.000Z'
    ]);
  });
});

describe('sortMoviesShowtimes', () => {
  test('sorts 2 showtimes', () => {
    const movies = [
      { showtimes: [
        '2020-05-23T16:31:09.000Z',
        '2020-05-17T06:55:45.000Z'
      ]},
      { showtimes: [
        '2020-05-20T13:23:48.000Z',
        '2020-06-17T21:18:36.000Z'
      ]}
    ];
    const expected = sortMoviesShowtimes(movies);
    expect(expected).toEqual([
      { showtimes: [
        '2020-05-17T06:55:45.000Z',
        '2020-05-23T16:31:09.000Z'
      ]},
      { showtimes: [
        '2020-05-20T13:23:48.000Z',
        '2020-06-17T21:18:36.000Z'
      ]}
    ]);
  });

  test('should not edit the parameter', () => {
    const movies = [{ showtimes: [
      '2020-05-23T16:31:09.000Z',
      '2020-05-17T06:55:45.000Z'
    ]}];
    sortMoviesShowtimes(movies);
    expect(movies).toEqual([{ showtimes: [
      '2020-05-23T16:31:09.000Z',
      '2020-05-17T06:55:45.000Z'
    ]}]);
  })
});

describe('isShowingInNext24Hours', () => {
  test('one hour in the future', () => {
    const showtime = '2020-05-23T06:00:00.000Z';
    const now = new Date('2020-05-23T05:00:00.000Z');
    const result = isShowingInNext24Hours(showtime, now);
    expect(result).toBe(true);
  });

  test('30 minutes in the future', () => {
    const showtime = '2020-05-23T06:00:00.000Z';
    const now = new Date('2020-05-23T05:00:00.000Z');
    const result = isShowingInNext24Hours(showtime, now);
    expect(result).toBe(true);
  });

  test('false if in the past', () => {
    const showtime = '2020-05-23T06:00:00.000Z';
    const now = new Date('2020-05-23T06:01:00.000Z');
    const result = isShowingInNext24Hours(showtime, now);
    expect(result).toBe(false);
  });

  test('true if right now', () => {
    const showtime = '2020-05-23T06:00:00.000Z';
    const now = new Date('2020-05-23T06:00:00.000Z');
    const result = isShowingInNext24Hours(showtime, now);
    expect(result).toBe(true);
  });

  test('25 hours in the future', () => {
    const showtime = '2020-05-24T06:00:00.000Z';
    const now = new Date('2020-05-23T05:00:00.000Z');
    const result = isShowingInNext24Hours(showtime, now);
    expect(result).toBe(false);
  });

  test('default works', () => {
    const showtime = new Date();
    showtime.setHours(showtime.getHours() + 1);
    const result = isShowingInNext24Hours(showtime.toISOString());
    expect(result).toBe(true);
  });
});

describe('isTimeInFuture', () => {
  test('yep', () => {
    const time = '2020-05-23T06:00:00.000Z';
    const now = new Date('2020-05-23T05:00:00.000Z');
    const result = isTimeInFuture(time, now);
    expect(result).toBe(true);
  });

  test('nope', () => {
    const time = '2020-05-23T06:00:00.000Z';
    const now = new Date('2020-05-24T06:00:00.000Z');
    const result = isTimeInFuture(time, now);
    expect(result).toBe(false);
  });

  test('default works', () => {
    const time = new Date();
    time.setHours(time.getHours() + 1);
    const isFuture = isTimeInFuture(time);
    expect(isFuture).toBe(true);
    time.setHours(time.getHours() - 10);
    const isPast = isTimeInFuture(time);
    expect(isPast).toBe(false);
  });
});