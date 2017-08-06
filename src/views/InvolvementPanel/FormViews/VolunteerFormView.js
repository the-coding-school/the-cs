import React from 'react';

import FormView from './FormView';

export default class VolunteerFormView extends React.Component {
 render() {

  const formMessage = "Our organization is run completely by volunteers. From our recruitment team to our grants & partnership team, your time and skills are invaluable to maximize our impact. While we have volunteer opportunities for all interested, at present, we would greatly benefit from law and accounting expertise.";
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
