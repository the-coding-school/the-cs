import React, { Component } from "react";

// Accepts two attributes:
//  - default: the content you want to show up normally
//  - onHover: the content you want to show up on hover
// Sample Usage:
//  <HoverFadeContent default={ <h1>Hello</h1> } onHover={ <h1>World</h1> } />
//  Another sample usage is the HoverFadeImage component above
export class HoverFadeContent extends Component {
  render() {
    return (
      <div className="hover_fade_content">
        <div className="hfc hfc_hover"> {this.props.onHover} </div>
        <div className="hfc hfc_default"> {this.props.default} </div>
      </div>
    );
  }
}

export class HoverFadeImage extends Component {
  render() {
    const defaultDOM = <img className="default_img" src={this.props.default} alt="hover" />
    const hoverDOM = <img className="hover_img" src={this.props.hover} alt="default" />
    return (
      <div className="hover_fade_image">
        <HoverFadeContent default={defaultDOM} onHover={hoverDOM} />
      </div>
    );
  }
}
