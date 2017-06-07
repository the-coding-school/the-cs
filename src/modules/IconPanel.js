import React, { Component } from 'react';
import '../scss/Skeleton.scss';
import "../scss/IconPanel.scss";
import '../css/animate.css';

class IconPanel extends Component {
  render() {
    const iconDOM = this.props.items.map((i) => {
      return <Icon key={i.name} imageSrc={i.imageURL} name={i.name} link={i.link || ""}/>
    });

    return (
      <div className="icon_panel">{iconDOM}</div>
    );
  }
}

class Icon extends Component {
  render() {
    return (
      <div className="icon_panel_icon_wrapper">
        <a href={this.props.link}>
          <div className="icon_panel_icon wow fadeIn">
            <img src={this.props.imageSrc} alt={this.props.name}/>
            <div className="icon_panel_icon_name"><p>{this.props.name}</p></div>
          </div>
        </a>
      </div>
    );
  }
}

export default IconPanel;
