import React from 'react';
import Icon from './Icon';

import './IconPanel.scss';
import 'css/animate.css';

export default class IconPanel extends React.Component {
  render() {
    const iconDOM = this.props.items.map((i) => {
      return <Icon key={i.name} image={i.image} name={i.name} link={i.link || ''}/>
    });

    return (
      <div className="icon_panel_wrapper">
        <div className='icon_panel'>{iconDOM}</div>
      </div>
    );
  }
}
