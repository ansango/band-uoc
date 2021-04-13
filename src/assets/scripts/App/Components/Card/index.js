import React from "react";

export default (props) => {
  return (
    <div className="wrapper-card">
      <div className="card m-1">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.position}</h6>
          <p className="card-text">{props.quote}</p>
        </div>
      </div>
    </div>
  );
};
