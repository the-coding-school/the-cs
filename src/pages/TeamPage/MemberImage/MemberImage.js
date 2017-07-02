import React from 'react';

import './MemberImage.scss';
import { HoverFadeImage } from '../../../components/HoverFade';

export default class MemberImage extends React.Component {
  render() {
    const root = process.env.PUBLIC_URL + "/images/team/";
    const regImage = root + this.props.imageID + ".jpg";
    const funImage = root + this.props.imageID + "_fun.jpg";
    // <HoverFadeImage default={regImage} hover={funImage} />
    return (
      <div className="member_image">
        {this.props.background && (<div className="member_image_background">
          <HoverFadeImage default={regImage} hover={funImage} />
        </div>
        )}
        <div className="member_image_main">
          <img src={regImage} alt={this.props.imageID}/>
        </div>
      </div>
    );
  }
}
