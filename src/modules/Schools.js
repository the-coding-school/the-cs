// import React, { Component } from 'react';
// import { TitledParagraphs } from './Skeleton';
// import IconPanel from "./IconPanel";
// import '../scss/Skeleton.scss';
// import "../scss/Schools.scss";
// import '../css/animate.css';
// import dataJSON from '../json/data.json';
//
// // export class Schools extends Component {
// //   render() {
// //     const pP = dataJSON.paragraphs.schoolshipsIntro;
// //     return (
// //       <div className="schools_section">
// //         <TitledParagraphs title={pP.title} paragraphs={pP.paragraphs} />
// //         <SchoolsPanel />
// //       </div>
// //     );
// //   }
// // }
//
// export class SchoolsPanel extends Component {
//   render() {
//   //
//     function sortSchools(a, b) {
//       if (a.name === "Santa Monica-Malibu USD") return -1;
//       if (a.name < b.name) return -1;
//       if (a.name > b.name) return 1;
//       return 0;
//     }
//   //
//   //   const schoolsDOM = dataJSON.schools.sort(sortSchools).map((p) => {
//   //     const imageSrc = process.env.PUBLIC_URL + "/images/schools/" + p.imageName;
//   //     return <School key={p.name} imageSrc={imageSrc} name={p.name} description={p.description} link={p.link}/>
//   //   });
//   //
//   //   return (
//   //     <div className="schools">
//   //       {schoolsDOM}
//   //     </div>
//   //   );
//   // }
//
//     const sortedSchools = dataJSON.schools.sort(sortSchools);
//     sortedSchools.forEach(function(i){
//       i.imageURL = process.env.PUBLIC_URL + "/images/schools/" + i.imageName;
//     });
//
//     console.log(sortedSchools);
//
//     return (
//       <div className="schools_panel">
//         <IconPanel items={sortedSchools} />
//       </div>
//     )
//   }
// }
//
// class School extends Component {
//   render() {
//     const p = this.props;
//     return (
//       <div className="school_wrapper">
//         <a href={p.link}>
//         <div className="school wow fadeIn">
//           <img src={p.imageSrc} alt={p.name} width="180" height="180" />
//           <div className="school_description"><p>{p.name}</p></div>
//         </div>
//         </a>
//       </div>
//     );
//   }
// }
