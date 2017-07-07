import React from 'react';

import FormView from './FormView';

export default class PartnerFormView extends React.Component {
  render() {

    const formMessage = `Partnerships are essential to maximizing the impact our program can have. If you or your company is interested in learning more, please contact us.`;
    const inputFields = [
      {
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'John Doe'
      },
      {
        name: 'email',
        type: 'text',
        label: 'E-mail',
        placeholder: 'johndoe@gmail.com'
      }
    ]
    return (
      <FormView
        className="volunteer_form_view"
        formMessage={formMessage}
        inputFields={inputFields}
      />
    );
  }
}
