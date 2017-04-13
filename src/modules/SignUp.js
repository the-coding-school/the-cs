import React, { Component } from 'react';
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/SignUp.scss';
import { TitledParagraphs, PageHeader, LinkButton } from './Skeleton';
import dataJSON from '../json/data.json';

class SignUp extends Component {
  render() {

    const curriculum = dataJSON.curriculumParagraphs;
    const curriculumDOM = curriculum.map(function(p) {
      return (
          <TitledParagraphs key={p.title} title={p.title} paragraphs={p.paragraphs} />
      );
    });

    const header = dataJSON.headers.signUp;
    const image = process.env.PUBLIC_URL + header.image;
    const linkButton = <LinkButton text="Sign up!" link="https://www.google.com/" />
    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description} appendDOM={linkButton}/>
        <div className="sign_up page container">
          {curriculumDOM}
          <hr/>
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
        {coursesDOM}
      </div>
    );
  }
}

class Course extends Component {
  render() {
    return (
      <div className="course_wrapper">
        <div className="course wow fadeInUp">
          <div className="course_title">
            <p>{this.props.name}</p>
          </div>
          <div className="course_description">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
