import React from 'react';

import TitledContent from '../TitledContent';
import TextBlock from '../TextBlock';

import './TitledParagraphs.scss';

export default class TitledParagraphs extends React.Component {
  render() {

    const {
      title,
      subtitle,
      paragraphs
    } = this.props;

    const paragraphsDOM = <TextBlock paragraphs={paragraphs} />;
    let tpDOM = null;

    if ("subtitle" in this.props) {
      tpDOM = <TitledContent title={title} subtitle={subtitle} content={paragraphsDOM} />
    } else {
      tpDOM = <TitledContent title={title} content={paragraphsDOM} />
    }
    return (
      <div className="titled_paragraphs"> {tpDOM} </div>
    );
  }
}
