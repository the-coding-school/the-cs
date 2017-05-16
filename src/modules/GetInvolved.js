import React, { Component } from 'react';
import { TitledParagraphs, PageHeader } from './Skeleton';
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/GetInvolved.scss';
import dataJSON from '../json/data.json';


class GetInvolved extends Component {
  render() {

    let missionDOM = dataJSON.ourMission.map(function(section) {
      return (
        <TitledParagraphs title={section.title} key={section.title}
                          paragraphs={section.paragraphs} />

      );
    });

    let contentDOM = dataJSON.aboutPage.map(function(section) {
      return (
        <TitledParagraphs title={section.title} key={section.title}
                          paragraphs={section.paragraphs} />

      );
    });

    const header = dataJSON.headers.getInvolved;
    const image = process.env.PUBLIC_URL + header.image;

    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="getinvolved_page page">
          <VolunteerTypeform />
        </div>
      </div>
    );
  }
}

class VolunteerTypeform extends Component {

  componentDidMount() {
    (function(){
      var qs,js,q,s,d=document,
          gi=d.getElementById,
          ce=d.createElement,
          gt=d.getElementsByTagName,
          id='typef_orm',
          b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
      if(!gi.call(d,id)) {
        js=ce.call(d,'script');
        js.id=id;js.src=b+'widget.js';
        q=gt.call(d,'script')[0];
        q.parentNode.insertBefore(js,q)
      }
    })()
  }


  render() {
    //style="width:100%;height:500px;"
    return (
      <div className="typeform" id="volunteer_typeform">
        <div className="typeform-widget" data-url="https://thecodingschool.typeform.com/to/K0Nggc" data-text="Volunteer" ></div>

      </div>
    );
  }
}

export default GetInvolved;
