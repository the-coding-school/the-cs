import React from 'react';

import './TitledContent.scss';

export default class TitledContent extends React.Component {
  render() {
    return (
      <div className='titled_content' key={this.props.title}>
        <div className='title_side'>
          <h1 className='title'>{this.props.title}</h1>
          { ('subtitle' in this.props) && <h2 className='subtitle'>{this.props.subtitle}</h2> }
        </div>
        <div className='content_side'>
          {this.props.content}
        </div>
      </div>
    );
  }
}
