import React from 'react';
import { Link } from 'react-router-dom';
import './OptionBar.scss';

export default class OptionBar extends React.Component {

  renderOptions() {
    return Object.keys(this.props.options).map((o) => {
      const option = this.props.options[o];
      let isSelected = (option === this.props.selectedOption);

      return (
        <div
          className={`option_bar_option ${(isSelected) ? 'selected' : '' }`}
          id={`option-${o}`}
          key={`option-${o}`}
          onClick={this.props.onClick}
        >
          <Link to={`/get-involved/${option.path}`}>
            {option.text}
          </Link>
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
