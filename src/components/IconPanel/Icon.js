import React from 'react';

export default class Icon extends React.Component {
  render() {
    const {
      name,
      link,
      image
    } = this.props;

    return (
      <div className='icon_panel_icon_wrapper'>
        <a href={link}>
          <div className='icon_panel_icon wow fadeIn'>
            <img src={image} alt={name}/>
            <div className='icon_panel_icon_name'>
              <p>{name}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
