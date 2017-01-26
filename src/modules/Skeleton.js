import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.scss';

class Skeleton extends React.Component {
   render() {

     // name: represents path for routing
     // text: what shows up in the navbar
     const pages = [
       { path: "", text: "Home" },
       { path: "about", text: "About Us" },
       { path: "team", text: "Our Team" },
       { path: "classes", text: "Our Classes" }
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
          <h1><Link to="/">THE CODING SCHOOL</Link></h1>
        </div>
        <div className="navbar_tabs flex">{navItems}</div>
      </nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className='footer container'>
        <hr/>
        <footer>Copyright © 2014 - All Rights Reserved - The Coding School</footer>
      </div>
    );
  }
}

export default Skeleton
