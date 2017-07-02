import React from 'react';
import TitledParagraphs from '../../components/TitledParagraphs';
import PageHeader from '../../components/PageHeader';
import PartnersPanel from '../../containers/PartnersPanel';

import './GetInvolvedPage.scss';

import pageData from './GetInvolvedPage.json';
import headerImage from './GetInvolvedPage.jpg';

class GetInvolvedPage extends React.Component {
  render() {
    const {
      header,
      donations,
      partnerships,
      schools,
      volunteer
    } = pageData;

    // TODO: Add donations section back in once finalized
    // TODO: Add form links for all sections once created

    return (
      <div className='App'>
        <PageHeader image={headerImage} title={header.title} description={header.description} />
        <div className='getinvolved_page page'>

          <div className='partners_section'>
            <TitledParagraphs
              title={partnerships.paragraphs.title}
              paragraphs={partnerships.paragraphs.paragraphs}
            />
            <PartnersPanel />
          </div>

          <div className='schools_section'>
            <TitledParagraphs
            title={schools.paragraphs.title}
            paragraphs={schools.paragraphs.paragraphs}
            />
          </div>

          <div className='volunteer_section'>
            <TitledParagraphs
            title={volunteer.paragraphs.title}
            paragraphs={volunteer.paragraphs.paragraphs}
            />
          </div>

        </div>
      </div>
    );
  }
}


// class DonationsPanel extends Component {
//   render() {
//
//     let options = dataJSON.donationOptions;
//     let optionsDOM = options.map(function(o) {
//       return <DonationOption option={o} key={o.amount}/>
//     })
//     return (
//       <div className='donations_panel'>
//         <div className='donations_options'>
//           {optionsDOM}
//         </div>
//         <DonateCustom />
//       </div>
//     );
//   }
// }
//
// class DonateCustom extends Component {
//   render() {
//     return (
//       <a className='donate_custom' href={this.props.paymentLink}>
//         Donate a custom amount.
//       </a>
//     );
//   }
// }
//
// // props: buttonText, buttonLink, optionImage
// class DonationOption extends Component {
//   render() {
//     let o = this.props.option;
//     return (
//       <div className='donation_option'>
//         <img src={o.image} alt={'donate ' + o}/>
//         <DonationButton text={o.category + ' ($' + o.amount + ')'} link={o.paymentLink} />
//       </div>
//     );
//   }
// }
//
// class DonationButton extends Component {
//   render() {
//     return (
//       <div className='donation_button'>
//         <a href={this.props.link}>
//           {this.props.text}
//         </a>
//       </div>
//     )
//   }
// }
//
// class VolunteerTypeform extends Component {
//
//   componentDidMount() {
//     (function(){
//       var qs,js,q,s,d=document,
//           gi=d.getElementById,
//           ce=d.createElement,
//           gt=d.getElementsByTagName,
//           id='typef_orm',
//           b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
//       if(!gi.call(d,id)) {
//         js=ce.call(d,'script');
//         js.id=id;js.src=b+'widget.js';
//         q=gt.call(d,'script')[0];
//         q.parentNode.insertBefore(js,q)
//       }
//     })()
//   }
//
//
//   render() {
//     //style='width:100%;height:500px;'
//     return (
//       <div className='typeform' id='volunteer_typeform'>
//         <div className='typeform-widget' data-url='https://thecodingschool.typeform.com/to/K0Nggc' data-text='Volunteer' ></div>
//
//       </div>
//     );
//   }
// }

export default GetInvolvedPage;
