import React from 'react';

import FormView from './FormView';

export default class BringToSchoolFormView extends React.Component {
  render() {

    const formMessage = `Ideally coding classes will be implemented into the school day, as this is the best way to ensure all students are exposed to coding regardless of whether they or their parents understand the importance of it. We can bring coding education to your students regardless of where your school is located.  Please complete the form below, and we'll be in touch to work together to begin empowering your students through code.`;
    const inputFields = [
      {
        elementType: 'input',
        name: 'school-name',
        type: 'text',
        label: 'School Name',
        placeholder: 'John Adams Middle School'
      },
      {
        elementType: 'input',
        name: 'grades',
        type: 'text',
        label: 'Grades',
        placeholder: 'K-5'
      },
      {
        elementType: 'input',
        name: 'address',
        type: 'text',
        label: 'School Address',
        placeholder: '123 Xyz Dr, Somewhere, CA 90001'
      },
      {
        elementType: 'input',
        name: 'contact-name',
        type: 'text',
        label: 'Contact Name',
        placeholder: 'John Doe'
      },
      {
        elementType: 'input',
        name: 'contact-title',
        type: 'text',
        label: 'Contact Title',
        placeholder: 'Principal'
      },
      {
        elementType: 'input',
        name: 'contact-phone',
        type: 'text',
        label: 'Contact Phone',
        placeholder: '555-555-5555'
      },
      {
        elementType: 'input',
        name: 'referral',
        type: 'text',
        label: 'How did you hear about The Coding School?',
        placeholder: ''
      },
      {
        elementType: 'textarea',
        name: 'comments',
        type: 'text',
        label: 'Any questions/comments?',
        placeholder: ''
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
