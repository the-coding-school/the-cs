// @flow

export { default as LinkScrollPage } from './Page';
export { default as Anchor } from './Anchor';

export const createAnchorId = (str: string) => (
  str.split(' ').join('').toLowerCase()
);
