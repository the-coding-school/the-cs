import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { pages } from '../../routes';

import './Skeleton.scss';
import 'scss/General.scss';

export default class Skeleton extends Component {
   render() {
      return (
         <div>
            <Navbar items={pages}/>
              {this.props.children}
            <Footer internalLinks={pages}/>
         </div>
      );
   }
}
