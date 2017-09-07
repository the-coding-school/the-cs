import Scroll from 'react-scroll';

/*
 * Smooth scrolling helpers
 */

const SCROLL_BUFFER = 25;

export function getElementPageY(element) {
  let y = element.offsetTop;
  let node = element;
  while (
    typeof node.offsetTop === 'number' &&
    typeof node.offsetParent === 'object' &&
    node.offsetParent !== document.body
  ) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

export function smoothlyScrollToPageOffset(offset, duration) {
  Scroll.animateScroll.scrollTo(offset - SCROLL_BUFFER, {
    duration: duration,
    smooth: true
  });
}

export function smoothlyScrollToElement(element, duration) {
  smoothlyScrollToPageOffset(getElementPageY(element) , duration)
}
