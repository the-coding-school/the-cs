import React, { Component } from "react";
import IconPanel from "./IconPanel";
import "../scss/Skeleton.scss";
import "../css/animate.css";
import schools from "../json/schools.json";

class SchoolsPanel extends Component {
  render() {

    // Don"t sort in-code, sort order defined arbitrarily in JSON
    schools.forEach(function(s){
      s.imageURL = process.env.PUBLIC_URL + "/images/schools/" + s.imageName;
    });

    return (
      <div className="schools_panel">
        <IconPanel items={schools} />
      </div>
    );
  }
}

export default SchoolsPanel;
