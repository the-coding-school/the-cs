import React, { Component } from 'react';
import { Link } from 'react-router'
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import dataJSON from "../json/data.json";

class Footer extends Component {
  render() {
    return (
        <footer>
          <FooterTop />
          <hr />
          <FooterBottom />
        </footer>
    );
  }
}

class FooterBottom extends Component {
  render() {
    return (

      <div className="footer_bottom">
        <p>The Coding School © 2017</p>
      </div>
    );
  }
}

class FooterTop extends Component {
  render() {
    return (
      <div className="footer_top">
        <InternalLinks />
        <ExternalLinks />
        <ContactInfo />
      </div>
    );
  }
}

class InternalLinks extends Component {
  render() {
    return (
      <div className="int_links">
        <h2>Links</h2>
        {
          dataJSON.sitePages.map((i) => {
            return (
              <div className="hvr_forward" key={i.path}>
                <Link to={"/" + i.path}>
                    {i.text}
                </Link>
              </div>
            );
          })
        }
      </div>
    );
  }
}

class ExternalLinks extends Component {
  render() {
    return (
      <div className="ext_links">
        <div>
          <h2>Resources</h2>
          {
            dataJSON.externalLinks.map((item) => {
              return (
                <div className="hvr_forward" key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

class ContactInfo extends Component {
  render() {
    const linkedInLink = "https://www.linkedin.com/company/the-coding-school";
    return (
      <div className="contact_info">

        <h2>Contact</h2>
        <a href={linkedInLink}>
          <div className="font_awesome">
            <i className="fa fa-linkedin-square"/> <span className="icon_name">LinkedIn</span>
          </div>
        </a>

        <div className="main_font">
          <i className="fa fa-envelope"/> info.thecodingschool@gmail.com
        </div>

        <p><strong>The Coding School</strong>
        <br/>3940 Laurel Cyn Blvd Ste 153
        <br/>Los Angeles, CA 91604</p>
      </div>

    );
  }
}

export default Footer;
