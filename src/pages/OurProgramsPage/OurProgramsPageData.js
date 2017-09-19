// @flow

// Icons
import SchoolIcon from 'components/icons/SchoolIcon';
import VirtualClassroomsIcon from 'components/icons/VirtualClassroomsIcon';
import CodeConnectsIcon from 'components/icons/CodeConnectsIcon';
import LearningDisabilitiesIcon from 'components/icons/LearningDisabilitiesIcon';

// Views
import CodeConnectsView from './ProgramViews/CodeConnectsView';
import InSchoolProgramsView from './ProgramViews/InSchoolProgramsView';
import VirtualClassroomsView from './ProgramViews/VirtualClassroomsView';
import LearningDisabilitiesView from './ProgramViews/LearningDisabilitiesView';

export default {
  header: {
    image: require('./header.jpg'),
    title: 'Our Programs',
    callToAction: 'Select a program to learn more'
  },
  ourPrograms: [
    {
      title: 'In-School Programs',
      subtitle: 'A 3 year-long coding course for K-12 students during and after the school day',
      paragraphs: [
        'Beginning in January 2014, we offer three-year long coding classes for K-12 students during the school day and after-school. With a minimum of two teachers per class, we make sure students get individualized support to fully understand the material. Throughout the courses, students learn the fundamental basics of computer programming by developing websites using HTML and CSS, animations using JavaScript, and game development using C#.',
        'Ultimately, our goal is to have our classes during the school day, as well as to increase the number of low socioeconomic communities we serve, to ensure that every student, regardless of whether they or their parents recognize the importance of coding, is exposed to computer programming.'
      ],
      image: require('../../images/programs-page/in-school.jpg'),
      icon: SchoolIcon,
      view: InSchoolProgramsView
    },
    {
      title: 'codeConnects',
      subtitle: 'A Diverse Approach to Achieving Diversity',
      paragraphs: [
        'We believe to achieve diversity in computer science, we must embrace diverse approaches to coding education so we’re reimagining how we teach computer science to address the structural barriers inherent to our current educational environment. codeConnects is an initiative that aims to empower middle and high school students who are traditionally underrepresented in the field of computer science, such as women, minorities, individuals with disabilities, those from low socioeconomic backgrounds, and rural communities.',
        'codeConnects is an online platform that offers one-on-one computer science instruction and mentorship to underrepresented middle and high school students. Pairing each student with a professional software engineer or university student majoring in computer science, students participate in weekly, face-to-face coding lessons using our platforms’ collaborative editing and video chat features. Through year-long instruction, students will learn real 21st century skills, from basic coding concepts to more advanced skills like building websites and mobile apps. Through personalized lessons, students will develop in-depth knowledge of CS skills and relationships with mentors, cultivate individualized passions, and gain confidence through personal encouragement.'
      ],
      image: require('../../images/programs-page/code-connects.jpg'),
      icon: CodeConnectsIcon,
      view: CodeConnectsView
    },
    {
      title: 'Learning Disabilities and Coding',
      subtitle: 'Seeing Learning Differences As Assets, Not Detriments',
      paragraphs: [
        'This program was inspired by two brothers with learning disabilities who took our class and fell in love with coding. While they typically faced difficulties concentrating and lack of enthusiasm, the brothers displayed passion and focus in coding class, which also had a butterfly effect into their other academic subjects. The assistant principal, witnessing the boys’ academic improvements and newfound desire to become engineers, asked us to create a program to ensure students with learning disabilities can be empowered through coding.',
        'As a response, we partnered with the Santa Monica-Malibu Unified School District to offer a pilot coding program for students with learning disabilities. Our overall goal in creating this initiative is to change the conversation surrounding learning disabilities through awareness and accessibility. We aspire to empower these students through coding, and moreover, help them see they can make meaningful contributions to the field of computer science.'
      ],
      image: require('../../images/programs-page/learning-disabilities.jpg'),
      icon: LearningDisabilitiesIcon,
      view: LearningDisabilitiesView
    },
    {
      title: 'Virtual Classrooms',
      subtitle: 'Bringing Coding to Schools Never Before Reached',
      paragraphs: [
        'With our video chat and collaborative editing platform, we can bring our instructors and year-long courses into entire classrooms. This is especially beneficial for schools located in rural communities.'
      ],
      image: require('../../images/programs-page/virtual-learning.jpg'),
      icon: VirtualClassroomsIcon,
      view: VirtualClassroomsView
    }
  ]
};
