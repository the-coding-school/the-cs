import React, { Component } from "react";
import IconPanel from "./IconPanel";
import "../scss/Skeleton.scss";
import "../css/animate.css";
import partners from "../json/partners.json";

class PartnersPanel extends Component {
  render() {

    partners.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }).forEach(function(p){
      p.imageURL = process.env.PUBLIC_URL + "images/partners/" + p.imageName;
    });

    return (
      <div className="partners_panel">
        <IconPanel items={partners} />
      </div>
    );
  }
}

export default PartnersPanel;
