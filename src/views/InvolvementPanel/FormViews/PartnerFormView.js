import React from 'react';

import FormView from './FormView';

export default class PartnerFormView extends React.Component {
  render() {

    const email = 'info@the-cs.org';
    const formMessage = `Partnering with The Coding School not only provides the opportunity to empower children who would not have the chance otherwise, but it also makes an impact on the world. Please complete the form below or reach out to us at <a href='mailto:${email}'>${email}</a>. We look forward to working together to have the greatest impact possible.`
    const inputFields = [
      {
        elementType: 'input',
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'John Doe'
      },
      {
        elementType: 'input',
        name: 'company',
        type: 'text',
        label: 'Company/Organization',
        placeholder: 'Google'
      },
      {
        elementType: 'input',
        name: 'title',
        type: 'text',
        label: 'Title',
        placeholder: 'CEO'
      },
      {
        elementType: 'input',
        name: 'email',
        type: 'text',
        label: 'E-mail',
        placeholder: 'johndoe@gmail.com'
      },
      {
        elementType: 'input',
        name: 'phone',
        type: 'text',
        label: 'Phone',
        placeholder: '555-555-5555'
      },
      {
        elementType: 'input',
        name: 'company address',
        type: 'text',
        label: 'Company Address',
        placeholder: '123 Xyz Dr, Somewhere, CA 90001'
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
        className='partner_form_view'
        formMessage={formMessage}
        formId='partner'
        inputFields={inputFields}
      />
    );
  }
}
