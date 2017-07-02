import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './Skeleton.scss';
import '../../scss/General.scss';
import '../../css/slick.css';
import '../../css/slick-theme.css';
import 'slick-carousel';

export default class Skeleton extends Component {
   render() {

     const sitePages = [
       { 'path': '', 'name': 'Home' },
       { 'path': 'about', 'name': 'About Us' },
       { 'path': 'footprint', 'name': 'Our Footprint' },
       { 'path': 'programs', 'name': 'Our Programs' },
       { 'path': 'team', 'name': 'Our Team' },
       { 'path': 'get-involved', 'name': 'Get Involved' }
     ]

      return (
         <div>
            <Navbar items={sitePages}/>
            {this.props.children}
            <Footer internalLinks={sitePages}/>
         </div>
      );
   }
}
