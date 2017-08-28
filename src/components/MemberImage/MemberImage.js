import React from 'react';

import './MemberImage.scss';
import HoverFadeImage from 'components/HoverFadeImage';

export default class MemberImage extends React.Component {
  render() {

    const {
      isSquare,
      images
    } = this.props;

    const imageComponent = (
      (images.regular !== images.fun) ?
      <HoverFadeImage regular={images.regular} hover={images.fun} /> :
      <img src={images.regular} alt='team member' />
    );

    return (
      <div className="member_image">
        {!isSquare && (<div className="member_image_background">
          {imageComponent}
        </div>
        )}
        <div className="member_image_main">
          {imageComponent}
        </div>
      </div>
    );
  }
}
