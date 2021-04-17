import React from "react";

export default (props) => {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    ></div>
  );
};
