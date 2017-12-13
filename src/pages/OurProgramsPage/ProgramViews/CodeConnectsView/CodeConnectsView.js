// @flow

import React from 'react';
import './CodeConnectsView.scss';

// import components
import ProgramElementIcon from 'components/ProgramElementIcon';
import ProgramImageParagraph from 'components/ProgramImageParagraph';
import ProgramApproachPiece from 'components/ProgramApproachPiece';

// import icons
import PeopleGroup from 'components/icons/PeopleGroup';
import UnderRepresentedGroups from 'components/icons/UnderRepresentedGroups';
import PersonalInstruction from 'components/icons/PersonalInstruction';

import ArtificialIntelligence from 'components/icons/ArtificialIntelligence';
import MobileAppBuilding from 'components/icons/MobileAppBuilding';
import VirtualReality from 'components/icons/VirtualReality';

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
      <div className='subheading'>
      	<div className='supersubheading'>Problems</div>
	<div className='subsubheading'>How We Approach Them</div>
      </div>
      <div className='program_view_issues'>
        <ProgramApproachPiece 
          title='Lack of differentiated instruction' 
          icon={<PeopleGroup/>}
          desc='We believe to achieve diversity in computer science, we must embrace diverse approaches to coding education so we’re reimagining how we teach computer science to address the structural barriers inherent to our current educational environment'
        />
        <ProgramApproachPiece 
          title='Many Underrepresented groups' 
          icon={<UnderRepresentedGroups fill='white'/>}
          desc='codeConnects is an initiative that aims to empower middle and
high school students who are traditionally underrepresented in
the field of computer science.'
        />
        <ProgramApproachPiece 
          title='No personal instruction' 
          icon={<PersonalInstruction fill='#0071BC'/>}
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
        <ProgramElementIcon icon={<ArtificialIntelligence fill='white'/>} desc='Year-long instruction'/>
        <ProgramElementIcon icon={<VirtualReality fill='white'/>} desc='Personalized lessons'/>
        <ProgramElementIcon icon={<MobileAppBuilding fill='white'/>} desc='Real-world skills'/>
      </div>
    </div>
  );
}
