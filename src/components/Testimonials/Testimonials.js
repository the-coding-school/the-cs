import './Testimonials.scss';
import React from 'react';

import TitledContent from '../TitledContent';
import TextBlock from '../TextBlock';

import { generateIdFromString } from 'utilities/dom';

export default class Testimonials extends React.Component {
  render() {

    const {
      title,
      subtitle,
      paragraphs
    } = this.props;

    const paragraphsDOM = <div className='text_block' dangerouslySetInnerHTML={{__html: this.props.paragraphs}} />
    let tpDOM = null;

    if ("subtitle" in this.props) {
      tpDOM = <TitledContent title={title} subtitle={subtitle} content={paragraphsDOM} />
    } else {
      tpDOM = <TitledContent title={title} content={paragraphsDOM} />
    }
    return (
      <div
        id={generateIdFromString(title)}
        className="titled_paragraphs"
      > {tpDOM} </div>
    );
  }
}
