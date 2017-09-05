// @flow

import * as React from 'react';

type PropsType = {
  id: string,
  pageMap: {[string]: ?HTMLElement}
};

export default (props: PropsType) => (
  <span
    className='page_anchor'
    ref={span => props.pageMap[props.id] = span}
    id={props.id}
  />
);
