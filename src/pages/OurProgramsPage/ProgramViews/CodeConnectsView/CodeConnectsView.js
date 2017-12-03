// @flow

import React from 'react';
import './CodeConnectsView.scss';

// key program element icons
import ProgramElementIcon from 'components/ProgramElementIcon';
import ProgramImageParagraph from 'components/ProgramImageParagraph';
import ProgramApproachPiece from 'components/ProgramApproachPiece';

export default function CodeConnectsView() {
  return (
    <div className='code_connects_view'>
      <div className='program_view_heading'>
        codeConnects
      </div>
      <div className='program_view_tagline'>
        <div className='tagline_text'>
          A diverse approach to achieving diversity
        </div>
      </div>
      <div className='program_view_issues'>
        <ProgramApproachPiece 
          title='Lack of differentiated instruction' 
          iconSrc={require('../../header.jpg')}
          desc='We believe to achieve diversity in computer science, we must embrace diverse approaches to coding education so we’re reimagining how we teach computer science to address the structural barriers inherent to our current educational environment'
        />
        <ProgramApproachPiece 
          title='Many Underrepresented groups' 
          iconSrc={require('../../header.jpg')}
          desc='codeConnects is an initiative that aims to empower middle and
high school students who are traditionally underrepresented in
the field of computer science.'
        />
        <ProgramApproachPiece 
          title='No personal instruction' 
          iconSrc={require('../../header.jpg')}
          desc='codeConnects is an online platform that offers
          one-on-one computer science instruction and
          mentorship. Pairing each student with a professional
          software engineer or computer science
          major, students participate in weekly,
          face-to-face coding lessons using our platforms’
          collaborative editing and video chat features.'
        />
      </div>
      <ProgramImageParagraph imgSrc={require('../../../../images/programs-page/code-connects.jpg')} text='Through year-long instruction, students will learn real 21st century
skills, from basic coding concepts to more advanced skills like building
websites and mobile apps. Through personalized lessons, students will
develop in-depth knowledge of CS skills and relationships with mentors,
cultivate individualized passions, and gain confidence through personal
encouragement.'/>
      <div className='codeConnects_elements'>
        <ProgramElementIcon iconSrc={require('../../header.jpg')} desc='Year-long instruction'/>
        <ProgramElementIcon iconSrc={require('../../header.jpg')} desc='Personalized lessons'/>
        <ProgramElementIcon iconSrc={require('../../header.jpg')} desc='Real-world skills'/>
      </div>
    </div>
  );
}
