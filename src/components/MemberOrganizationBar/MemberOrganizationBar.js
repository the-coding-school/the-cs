import React from 'react';

import './MemberOrganizationBar.scss';

export default class MemberOrganizationBar extends React.Component {
  render() {
    const organization = this.props.organization;
    const organizationID = organization.toLowerCase().split(' ').join('_');
    return (
      <div className={'member_organization_bar ' + organizationID}>{organization}</div>
    )
  }
}
