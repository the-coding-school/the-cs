import React from 'react';

import './OptionBar.scss';

export default class OptionBar extends React.Component {

  renderOptions() {
    return Object.keys(this.props.options).map((o) => {
      let isSelected = (this.props.options[o] === this.props.selectedOption);

      return (
        <div
          className={`option_bar_option ${(isSelected) ? 'selected' : '' }`}
          id={`option-${o}`}
          key={`option-${o}`}
          onClick={this.props.onClick}
        >
          {this.props.options[o].text}
        </div>
      );
    });
  }

  render() {

    return (
      <div className='option_bar'>
        { this.renderOptions() }
      </div>
    );
  }
}
