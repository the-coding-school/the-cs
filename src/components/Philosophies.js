import React, { Component } from "react";
import { HoverCardTitledText } from "./HoverCard";
import philosophies from "../json/philosophies.json";

import "../scss/Philosophies.scss";

class Philosophies extends Component {
  render() {
    const philosophiesDOM = philosophies.map((p) =>  {
      return (
        <HoverCardTitledText key={p.philosophy} title={p.philosophy} description={p.description} />
      );
    })

    return (
      <div className="philosophies_wrapper">
        <div className="philosophies">
          {philosophiesDOM}
        </div>
      </div>
    );
  }
}

export default Philosophies;
