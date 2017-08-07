import React from 'react';

import FormView from './FormView';

export default class TeacherFormView extends React.Component {
 render() {

  const formMessage = "Join our teaching team and change a child’s life. We have a wide range of teaching opportunities available, from going into classrooms in cities across the country to teaching from the comfort of your own home.";
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
    className='teacher_form_view'
    formMessage={formMessage}
    formId='teacher'
    inputFields={inputFields}
   />
  );
 }
}
