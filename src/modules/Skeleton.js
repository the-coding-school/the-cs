import React, { Component } from 'react';
import { Link } from 'react-router'
import '../scss/App.scss';
import '../scss/Skeleton.scss';

export class Skeleton extends React.Component {
   render() {
     // name: represents react routing path
     // text: navbar text
     const pages = [
       { path: "about", text: "About Us" },
       { path: "team", text: "Our Team" },
       { path: "classes", text: "Classes" }
     ];
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
  render() {
    return (
        <footer>
          <div className="social_links">
            <FontAwesomeLink link="https://www.linkedin.com/company/the-coding-school"
              classNames="fa fa-linkedin-square"/>
          </div>
          <div className="container">
            <p>Copyright © 2017 - All Rights Reserved - The Coding School</p>
            <span>
              <p>Email: <a href="mailto:thecodingschool@live.com">
                thecodingschool@live.com
              </a> | Phone: (323)-790-9992</p>
            </span>
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
