import React from 'react';

import FormView from './FormView';

export default class VolunteerFormView extends React.Component {
 render() {

  const formMessage = `Join our teaching team and change a child's life. Our teaching team is comprised of over 500 professional software engineers and CS university student passionate about empowering the next generation through code. We have teaching opportunities at schools across the country or available for you to teach from your home through our platform, codeConnects. In addition to teaching there are many other ways to get involved with The Coding School. We welcome your time and skills in helping to make an impact in children's lives.`;
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
    name: 'email',
    type: 'text',
    label: 'E-mail',
    placeholder: 'johndoe@gmail.com'
   },
   {
    elementType: 'input',
    name: 'location',
    type: 'text',
    label: 'Location',
    placeholder: 'Los Angeles, CA'
   },
   {
    elementType: 'input',
    name: 'school-employer',
    type: 'text',
    label: 'School/Employer',
    placeholder: 'UCLA'
   },
   {
    elementType: 'input',
    name: 'school-year',
    type: 'text',
    label: 'Year in School',
    placeholder: 'Sophomore'
   },
   {
    elementType: 'input',
    name: 'major',
    type: 'text',
    label: 'Major',
    placeholder: 'Computer Science'
   },
   {
    elementType: 'placeholder',
    name: 'volunteer-type',
    type: 'text',
    label: 'How would you like to help TCS?',
    placeholder: 'e.g. teach, help with operations, etc.'
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
    className='volunteer_form_view'
    formMessage={formMessage}
    formId='volunteer'
    inputFields={inputFields}
   />
  );
 }
}
