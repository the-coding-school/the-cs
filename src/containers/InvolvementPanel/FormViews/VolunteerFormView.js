import React from 'react';

import FormView from './FormView';

export default class VolunteerFormView extends React.Component {
  render() {

    const formMessage = `We are always looking for passionate coders to join our teaching team, as well as non-coders to help run and expand our programs. If you're interested, contact us!`
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
