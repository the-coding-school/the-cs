import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './Skeleton.scss';
import 'scss/General.scss';

export default class Skeleton extends Component {
   render() {
      return (
         <div>
            <Navbar />
            {this.props.children}
            <Footer />
         </div>
      );
   }
}
