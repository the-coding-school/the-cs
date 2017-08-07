import React from 'react';

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
    this.options = {
      VOLUNTEER: {
        text: 'Volunteer',
        view: <VolunteerFormView />
      },
      TEACHER: {
        text: 'Become a Teacher',
        view: <TeacherFormView />
      },
      BRING_TO_SCHOOL: {
        text: 'Bring coding to your school',
        view: <BringToSchoolFormView />
      },
      PARTNER: {
        text: 'Partner with us',
        view: <PartnerFormView />
      }
    }

    this.state = {
      selectedOption: this.options.VOLUNTEER
    }
  }

  changeSelectedOption(event) {
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
          options={this.options}
          selectedOption={this.state.selectedOption}
          onClick={this.changeSelectedOption.bind(this)}
        />

        { this.state.selectedOption.view }

      </div>
    );
  }
}
