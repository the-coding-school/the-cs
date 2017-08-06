import React from 'react';

import FormView from './FormView';

export default class BringToSchoolFormView extends React.Component {
  render() {

    const formMessage = "We would love to bring coding to your students, whether it be through in-school, afterschool, or virtual classes. Ideally, we will be able to work together to implement coding classes into the regular school day as this is the best way to ensure all students are exposed to coding, regardless of whether they or their parents recognize the importance of it.";
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
        className='bring_coding_form_view'
        formMessage={formMessage}
        formId='bring_coding_to_school'
        inputFields={inputFields}
      />
    );
  }
}
