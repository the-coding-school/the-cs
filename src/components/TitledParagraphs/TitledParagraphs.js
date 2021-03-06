// @flow

import * as React from 'react';
import TitledContent from '../TitledContent';
import TextBlock from '../TextBlock';
import './TitledParagraphs.scss';

type PropsType = {
  title?: string,
  subtitle?: string,
  paragraphs: Array<string>
};

export default (props: PropsType) => (
  <div className="titled_paragraphs">
    <TitledContent title={props.title} subtitle={props.subtitle}>
      <TextBlock paragraphs={props.paragraphs} />
    </TitledContent>
  </div>
);
