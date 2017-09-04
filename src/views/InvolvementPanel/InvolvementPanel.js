import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import OptionBar from './OptionBar';
import {
  VolunteerFormView,
  TeacherFormView,
  BringToSchoolFormView,
  PartnerFormView
} from './FormViews'

import './InvolvementPanel.scss';

export default class InvolvementPanel extends React.Component {

  constructor(props) {
    super(props);
    this.forms = {
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
  }

  changeSelectedForm(event) {
    const clickedOption = event.target.id.substr(7);
    this.setState({
      selectedOption: this.options[clickedOption]
    })
  }

  getOptionTextArray() {
    return Object.keys(this.options).map((o) => (this.options[o].text));
  }

  render() {
    return (
      <div className='involvement_panel'>
        <OptionBar
          options={this.forms}
          selectedOption={this.props.selectedForm}
          onClick={this.changeSelectedForm.bind(this)}
        />

        <Route
          exact path='/get-involved'
          render={() => (<Redirect to='/get-involved/volunteer' />)}
        />

        {
          Object.keys(this.forms).map(formKey => {
            return (
              <Route
                key={formKey}
                exact
                path={`/get-involved/${this.forms[formKey].path}`}
                component={this.forms[formKey].view}
              />
            );
          })
        }

      </div>
    );
  }
}
