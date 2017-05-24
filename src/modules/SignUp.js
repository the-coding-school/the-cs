import React, { Component } from 'react';
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/SignUp.scss';
import { TitledContent, TitledParagraphs, PageHeader, LinkButton } from './Skeleton';
import dataJSON from '../json/data.json';

class SignUp extends Component {
  render() {

    const curriculum = dataJSON.paragraphs.curriculum;

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
        <PageHeader image={image} title={header.title} description={header.description}/>
        <div className="signuppage page">
          {curriculumDOM}
        </div>
      </div>
    );
  }
}

class OurCourses extends Component {
  render() {

    const courses = dataJSON.courses;

    const htmlCurDOM = courses.web.map(function(c) {
      return (
          <Course key={c.name} name={c.name} description={c.description} />
      );
    });

    const jsCurDOM = courses.js.map(function(c) {
      return (
          <Course key={c.name} name={c.name} description={c.description} />
      );
    });

    const unityCurDOM = courses.unity.map(function(c) {
      return (
          <Course key={c.name} name={c.name} description={c.description} />
      );
    });

    return (
      <div className="our_courses">
        <h1>HTML/CSS</h1>
        <div className="courses_row">{htmlCurDOM}</div>
        <h1>Javascript</h1>
        <div className="courses_row">{jsCurDOM}</div>
        <h1>Unity</h1>
        <div className="courses_row">{unityCurDOM}</div>
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
