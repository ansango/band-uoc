import React from "react";
import svg from "url:./";
export default (props) => {
  return (
    <div className="wrapper-card">
      <div className="my-1 thumbnail">
        <a
          href="https://twitter.com"
          target="_blank"
          className="layer nav-link"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      <div className="my-1">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.position}</h6>
      </div>
    </div>
  );
};
