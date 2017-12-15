import React from 'react';

// import icons
import PeopleGroup from 'components/icons/PeopleGroup';
import UnderRepresentedGroups from 'components/icons/UnderRepresentedGroups';
import PersonalInstruction from 'components/icons/PersonalInstruction';
import ArtificialIntelligence from 'components/icons/ArtificialIntelligence';
import VirtualReality from 'components/icons/VirtualReality';
import MobileAppBuilding from 'components/icons/MobileAppBuilding';

export default {
    tagline: 'A diverse approach to achieving diversity',
    approaches: [
        {
            title: 'Lack of Differentiated Instruction',
            description: 'We believe to achieve diversity in computer science, we must embrace diverse approaches to coding education so we’re reimagining how we teach computer science to address the structural barriers inherent to our current educational environment',
            icon: <PeopleGroup/>
        },
        {
            title: 'Many Underrepresented Groups',
            description: 'codeConnects is an initiative that aims to empower middle and high school students who are traditionally underrepresented in the field of computer science.',
            icon: <UnderRepresentedGroups fill='white'/>
        },
        {
            title: 'No Personal Instruction',
            description: 'codeConnects is an online platform that offers one-on-one computer science instruction and mentorship. Pairing each student with a professional software engineer or computer science major, students participate in weekly, face-to-face coding lessons using our platforms’ collaborative editing and video chat features.',
            icon: <PersonalInstruction fill='#0071BC'/>
        }
    ],
    imageParagraphText: 'Through year-long instruction, students will learn real 21st century skills, from basic coding concepts to more advanced skills like building websites and mobile apps. Through personalized lessons, students will develop in-depth knowledge of CS skills and relationships with mentors, cultivate individualized passions, and gain confidence through personal encouragement.',
    programElements: [
    
        {
            title: 'Year-long Instruction',
            icon: <ArtificialIntelligence fill='white'/> 
        },
        {
            title: 'Personalized Lessons',
            icon: <VirtualReality fill='white'/>
        },
        {
            title: 'Real-world Skills',
            icon: <MobileAppBuilding fill='white'/>
        }
    
    ]    
}