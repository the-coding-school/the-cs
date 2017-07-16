import React from 'react';

import './FormView.scss';

export default class FormView extends React.Component {

  renderInputFields() {
    const inputs = this.props.inputFields;

    return inputs.map((i) => {
      switch (i.elementType) {
        default:
        case 'input':
          return (
            <div className='form_input' key={i.name}>
              <label htmlFor={`input-${i.name}`}>
                {i.label}
              </label>
              <input
                className='input_field'
                type={i.type}
                name={i.name}
                id={`input-${i.name}`}
                placeholder={i.placeholder}
              />
            </div>
          );
        case 'textarea':
          return (
            <div className='form_input' key={i.name}>
              <label htmlFor={`input-${i.name}`}>
                {i.label}
              </label>
              <textarea
                className='input_field'
                rows='5'
                name={i.name}
                id={`input-${i.name}`}
                placeholder={i.placeholder}
              />
          </div>
          );
      }
    });
  }

  render() {
    const email = 'info@the-cs.org';
    return (
      <form
        className={`form_view ${this.props.className}`}
        action={`https://formspree.io/${email}`}
        method='POST'
      >
        <div
          className='form_message'
          dangerouslySetInnerHTML={{__html: this.props.formMessage}}
        ></div>

        <div className='form_inputs'>
          { this.renderInputFields() }
        </div>

        <input
          className='button'
          type='submit'
          value='Submit'
        />

      </form>
    );
  }
}
