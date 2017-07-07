import React from 'react';

import FormView from './FormView';

export default class BringToSchoolFormView extends React.Component {
  render() {

    // "contact name"; "title"  after 'school'  and we should have location: city, state, location?  or address?    
    // maybe "address" is best after  'email' .



    const formMessage = `If you are interested in bringing coding education to your students, please contact us.`;
    const inputFields = [
      {
        name: 'name',
        type: 'text',
        label: 'Contact Name',
        placeholder: 'John Doe'
      },
      {
        name: 'email',
        type: 'text',
        label: 'E-mail',
        placeholder: 'johndoe@gmail.com'
      },
      {
        name: 'phone',
        type: 'text',
        label: 'Phone',
        placeholder: '555-555-5555'
      },
      {
        name: 'location',
        type: 'text',
        label: 'School Location',
        placeholder: 'Los Angeles, CA'
      }
    ]
    return (
      <FormView
        className="bring_coding_form_view"
        formMessage={formMessage}
        inputFields={inputFields}
      />
    );
  }
}
