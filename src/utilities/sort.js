// Various sorting algorithms for use with Array.prototype.sort()

// Keep in mind, returning -1 sorts toward front, returning 1 sorts toward back

import moment from 'moment';

export const recencySort = (a, b) => {
  if (moment(a.date).isAfter(b.date)) return -1;
  if (moment(a.date).isBefore(b.date)) return 1;
  return 0;
}

export const alphaSort = (a, b) => (a < b) ? -1 : 1;
