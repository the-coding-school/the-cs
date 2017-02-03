import React, { Component } from 'react';
import { Link } from 'react-router'
import '../scss/App.scss';
import '../scss/Skeleton.scss';

const pages = [
  { path: "about", text: "About Us" },
  { path: "team", text: "Our Team" },
  { path: "sign-up", text: "Sign Up" }
];

export class Skeleton extends React.Component {
   render() {
     // name: represents react routing path
     // text: navbar text

      return (
         <div>
            <Navbar name="The Coding School" items={pages}/>
            {this.props.children}
            <Footer/>
         </div>
      );
   }
}

class Navbar extends Component {
  render() {
    var items = this.props.items;
    var navItems = items.map((i) => {
      return (
        <Link key={i.path} to={"/" + i.path}>
            {i.text.toUpperCase()}
        </Link>
      );
    });

    return (
      <nav className="flex" id="navbar">
        <div className="navbar_logo">
          <div className="logo_box">
            <h1><Link to="/">THE CODING SCHOOL</Link></h1>
          </div>
        </div>
        <div className="navbar_tabs flex">{navItems}</div>
      </nav>
    );
  }
}

class Footer extends Component {

  // should contain
  // * contact information
  // * resource websites

  render() {
    const resourceLinks = [
      {
        name: "Code.org",
        href: "http://www.code.org"
      },
      {
        name: "Codecademy",
        href: "http://www.codecademy.com"
      },
      {
        name: "Python Tutorial",
        href: "https://docs.python.org/3/tutorial/index.html"
      },
      {
        name: "Python Documentation",
        href: "https://docs.python.org/3/"
      },
      {
        name: "AP Computer Science",
        href: "https://apstudent.collegeboard.org/apcourse/ap-computer-science-a"
      }
    ]
    const linkedInLink = "https://www.linkedin.com/company/the-coding-school";
    return (
        <footer>

          <div className="flex footer_top">
            <div className="int_links">
              <h2>Links</h2>
              {
                pages.map((i) => {
                  return (
                    <div>
                      <Link key={i.path} to={"/" + i.path}>
                          {i.text}
                      </Link>
                    </div>
                  );
                })
              }
            </div>

            <div className="ext_resources">
              <div>
                <h2>Resources</h2>
                {
                  resourceLinks.map((item) => {
                    return (
                      <div key={item.href}>
                        <a href={item.href}>{item.name}</a>
                      </div>
                    );
                  })
                }
              </div>
            </div>

            <div className="contact_info">

              <h2>Contact</h2>
              <a href="https://www.linkedin.com/company/the-coding-school">
                <div className="font_awesome">
                  <i className="fa fa-linkedin-square"/> <span class="icon_name">LinkedIn</span>
                </div>
              </a>

              <div>
                <i className="fa fa-envelope"/> info.thecodingschool@gmail.com
              </div>

              <i className="fa fa-phone"/> (323)-790-9992

              <p><strong>The Coding School</strong>
              <br/>3940 Laurel Cyn Blvd
              <br/>Los Angeles, CA 91604</p>
            </div>
          </div>

          <hr/>

          <div className="footer_bottom">
            <p>The Coding School © 2017</p>
          </div>


        </footer>
    );
  }
}

export class FontAwesomeLink extends Component {
  render() {
    const link = this.props.link;
    const classNames = this.props.classNames;
    if (this.props.link) {
      return (
        <a href={link}><i className={classNames}></i></a>
      );
    }
  }
}
