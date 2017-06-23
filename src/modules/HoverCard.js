import React, { Component } from "react";
import "../scss/HoverCard.scss"

export class HoverCard extends Component {
  render() {
    return (
      <div className="hover_card_wrapper">
        <div className="hover_card">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export class HoverCardTitledText extends Component {
  render() {
    const p = this.props;
    return (
      <HoverCard>
        <div className="hover_card_text">
          <div className="hover_card_title"> {p.title} </div>
          <div className="hover_card_divider" />
          <div className="hover_card_description"> {p.description} </div>
        </div>
      </HoverCard>
    );
  }
}
