import React, { Component } from 'react';
import { Link } from 'react-router'

import './Footer.scss';
import '../../scss/Animations.scss';
import footerImage from './footer.png';

export default class Footer extends Component {
  render() {
    return (
        <footer>
          <div className='footer_top'>
            <InternalLinks links={this.props.internalLinks}/>
            <ExternalLinks />
            <ContactInfo />
          </div>
          <FooterBottom />
        </footer>
    );
  }
}

class FooterBottom extends Component {
  render() {
    return (
      <div className='footer_bottom'>
        <div className='footer_image'>
          <img src={footerImage} />
        </div>
      </div>
    );
  }
}

class InternalLinks extends Component {
  render() {

    const linksDOM = this.props.links.map((i) => {
      return (
        <div className='hvr_forward' key={i.path}>
          <Link to={'/' + i.path}> {i.name} </Link>
        </div>
      );
    });

    return (
      <div className='int_links'>
        <h2>Links</h2>
        { linksDOM }
      </div>
    );
  }
}

class ExternalLinks extends Component {
  render() {

    const externalLinks = [
      { 'name': 'Code.org', 'link': 'http://www.code.org' },
      { 'name': 'Codecademy', 'link': 'http://www.codecademy.com' },
      { 'name': 'Python Tutorial', 'link': 'https://docs.python.org/3/tutorial/index.html' },
      { 'name': 'Python Documentation', 'link': 'https://docs.python.org/3/' },
      { 'name': 'AP Computer Science', 'link': 'https://apstudent.collegeboard.org/apcourse/ap-computer-science-a' }
    ]

    const externalLinksDOM = externalLinks.map((item) => {
      return (
        <div className='hvr_forward' key={item.name}>
          <a href={item.link}>{item.name}</a>
        </div>
      );
    })

    return (
      <div className='ext_links'>
        <div>
          <h2>Resources</h2>
          {externalLinksDOM}
        </div>
      </div>
    );
  }
}

class ContactInfo extends Component {
  render() {
    const linkedInLink = 'https://www.linkedin.com/company/the-coding-school';
    return (
      <div className='contact_info'>

        <h2>Contact</h2>
        <a href={linkedInLink}>
          <div className='font_awesome'>
            <i className='fa fa-linkedin-square'/> <span className='icon_name'>LinkedIn</span>
          </div>
        </a>

        <div className='main_font'>
          <p><i className='fa fa-envelope'/> info.thecodingschool@gmail.com</p>
        </div>

        <p><strong>The Coding School</strong>
        <br/>3940 Laurel Cyn Blvd Ste 153
        <br/>Los Angeles, CA 91604</p>
      </div>

    );
  }
}
