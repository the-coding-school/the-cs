// @flow

import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import OptionBar from './OptionBar';
import {
  VolunteerFormView,
  TeacherFormView,
  BringToSchoolFormView,
  PartnerFormView
} from './FormViews'

import './InvolvementPanel.scss';

export default () => {

  const forms = {
    VOLUNTEER: {
      path: 'volunteer',
      text: 'Volunteer',
      view: VolunteerFormView
    },
    TEACHER: {
      path: 'become-a-teacher',
      text: 'Become a Teacher',
      view: TeacherFormView
    },
    BRING_TO_SCHOOL: {
      path: 'bring-coding',
      text: 'Bring coding to your school',
      view: BringToSchoolFormView
    },
    PARTNER: {
      path: 'partner',
      text: 'Partner with us',
      view: PartnerFormView
    }
  }

  // Redirects queries to '/get-involved' to '/get-involved/volunteer' to
  // guarantee that a form is rendered via the React-Router model
  return (
    <div className='involvement_panel'>
      <OptionBar options={forms}/>

      <Route
        exact path='/get-involved'
        render={() => (<Redirect to='/get-involved/volunteer' />)}
      />

      {
        Object.keys(forms).map(formKey => {
          return (
            <Route
              key={formKey}
              exact
              path={`/get-involved/${forms[formKey].path}`}
              component={forms[formKey].view}
            />
          );
        })
      }
    </div>
  );
}
