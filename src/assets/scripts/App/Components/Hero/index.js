import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <section className="component_hero">
      <div className="item item1"></div>
      <div className="item item2"></div>

      <Link className="item item3 nav-link" to="/tour">
        <span>TOUR</span>
      </Link>

      <div className="item item4">
        <span>A</span>
      </div>
      <div className="item item5">
        <span>BEAT</span>
      </div>
      <div className="item item6">
        <span>BAND</span>
      </div>
      <Link className="item item7 nav-link" to="/band#contact">
        <span>CONTACT</span>
      </Link>
      <div className="item item8"></div>
      <div className="item item9"></div>
    </section>
  );
};
