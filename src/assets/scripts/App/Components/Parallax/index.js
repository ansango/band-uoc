import React from "react";
import heart from "../../../../images/parallax/heart.jpg";
export default (props) => {
  return (
    <div
      className="parallax d-flex align-items-center"
      style={{
        backgroundImage: `url(${props.img})`,
        minHeight: `${props.height}px`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6  d-flex align-items-center">
            <h1 className="text-white">{props.title}</h1>
          </div>
          <div className="col-md-6  d-flex justify-content-center">
            <div className="album">
              <img src={heart}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
