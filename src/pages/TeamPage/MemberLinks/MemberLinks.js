import React from 'react';

import FontAwesomeLink from 'components/FontAwesomeLink';

import './MemberLinks.scss';
import '../../../scss/_fa/font-awesome.scss';

export default class MemberLinks extends React.Component {
  render() {
    const links = this.props.links;
    return (
      <div className='member_links'>
        { links.hasOwnProperty('personal') &&
           <FontAwesomeLink link={links.personal} classNames='fa fa-external-link-square'/>
         }
        { links.hasOwnProperty('facebook') &&
          <FontAwesomeLink link={links.facebook} classNames='fa fa-facebook-square'/>
        }
        { links.hasOwnProperty('linkedin') &&
          <FontAwesomeLink link={links.linkedin} classNames='fa fa-linkedin-square'/>
        }
      </div>
    );
  }
}
