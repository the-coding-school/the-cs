import React, { Component } from 'react';
import '../scss/App.scss';
import '../scss/About.scss';

class About extends Component {
  render() {

    return (
      <div className="about-app App">
        <div className="container">
          <div className="our_mission">
            <h1 className="title">OUR MISSION</h1>
            <p className="med_p">
              Our mission is to ensure our children are equipped to thrive in
              this technologically-driven world.
            </p>
          </div>
          <div className="who_we_are">
            <h1 className="title">WHO WE ARE</h1>
            <p className="med_p">
              Founded in 2014, The Coding School is a 501c3 non-profit
              dedicated to equipping children with the skills and knowledge
              needed to thrive in our tech-driven world.
            </p>
            <p className="med_p">
              We teach coding to elementary, middle and high school students so this
              universal language becomes second nature. We believe that learning
              how to code is like learning a foreign language, and the earlier students
              begin learning this new way of thinking, the easier it becomes. However,
              there is a fundamental disconnect between what students are learning in
              school and what is happening in the real world.
            </p>
            <p className="med_p">
              Whilst growing up through the US education system, founder Kiera Peltz
              witnessed this disconnect personally. Disappointed in the level of computer
               science education offered to K-12 students, Kiera researched how
              other countries were educating their children. She felt the American system
               was not preparing students for a future where computer language
              will be the universal language for education, work and play. She sought
              a way to fix this gap; founding The Coding School in 2014.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
