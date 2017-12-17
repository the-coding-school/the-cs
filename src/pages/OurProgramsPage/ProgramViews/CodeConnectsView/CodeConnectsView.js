// @flow

import React from 'react';
import './CodeConnectsView.scss';
import pageData from './CodeConnectsViewData';

// import components
import ProgramElementIcon from 'components/ProgramElementIcon';
import ProgramImageParagraph from 'components/ProgramImageParagraph';
import ProgramApproachPiece from 'components/ProgramApproachPiece';

export default function CodeConnectsView() {

  return (
    <div className='code_connects_view'>
      <div className='subheading'>
      	<div className='supersubheading'>Problems</div>
	    <div className='subsubheading'>How We Approach Them</div>
      </div>
      <div className='program_view_issues'>
        {
            pageData.approaches.map(
                function (approach, idx) {
                    return <ProgramApproachPiece
                                key={idx+1}
                                n={idx+1}
                                title={approach.title} 
                                desc={approach.description} 
                                icon={approach.icon}
                                />
                }
            )
        }
      </div>
      <ProgramImageParagraph 
        imgSrc={require('../../../../images/programs-page/code-connects.jpg')} 
        text={pageData.imageParagraphText}
        />
      <div className='codeConnects_elements'>
        {
            pageData.programElements.map(
                function (el) {
                    return <ProgramElementIcon
                            key={el.title}
                            title={el.title}
                            icon={el.icon}
                            />
                }
            )
        }
      </div>
    </div>
  );
}
