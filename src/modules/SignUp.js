import React, { Component } from 'react';
import '../scss/App.scss';

import coursesData from '../json/courses.json'

class SignUp extends Component {
  render() {

    return (
      <div className="App">
        <OurCourses />
      </div>
    );
  }
}

class OurCourses extends Component {
  render() {

    const courses = coursesData.courses;
    const coursesDOM = courses.map((c) =>
      <Course key={c.name} name={c.name} description={c.description}/>
    );

    return (
      <div className="container">
        <h1 className="title">OUR COURSES</h1>
        <div className="our_classes flex flex_wrap">
          {coursesDOM}
        </div>
      </div>
    );
  }
}

class Course extends Component {
  render() {
    return (
      <div className="cell_wrapper">
        <div className="cell">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SignUp;
