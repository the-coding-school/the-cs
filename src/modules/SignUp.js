import React, { Component } from 'react';
import '../scss/App.scss';
import { TitledParagraphs } from './Skeleton';
import dataJSON from '../json/data.json';

class SignUp extends Component {
  render() {
    const courses = dataJSON.courses;
    const curriculum = dataJSON.curriculumParagraphs;
    const curriculumDOM = curriculum.map(function(p) {
      return (
          <TitledParagraphs title={p.title} paragraphs={p.paragraphs} />
      );
    });

    return (
      <div className="App">
        <div className="container">
          {curriculumDOM}
          <OurCourses />
        </div>
      </div>
    );
  }
}

class OurCourses extends Component {
  render() {

    const courses = dataJSON.courses;
    const coursesDOM = courses.map((c) =>
      <Course key={c.name} name={c.name} description={c.description}/>
    );

    return (
      <div className="our_courses">

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
