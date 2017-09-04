import * as React from 'react';
import { smoothlyScrollToElement } from 'utilities/dom';

const SCROLL_DURATION = 600;

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.pageMap = {};
  }

  componentDidMount() {
    this.hashScroll();
  }

  componentDidUpdate() {
    this.hashScroll();
  }

  hashScroll() {
    const desiredSection = window.location.hash.substr(1);
    if (desiredSection) {
      smoothlyScrollToElement(this.pageMap[desiredSection], SCROLL_DURATION);
    }
  }
}
