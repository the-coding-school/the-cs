import React from 'react';

import './TextBlock.scss';

export default class TextBlock extends React.Component {
  render() {
    let paragraphs = this.props.paragraphs.map(function(p) {
      return <p key={p}>{p}</p>
    });

    return (<div className='text_block'> {paragraphs} </div>);
  }
}
