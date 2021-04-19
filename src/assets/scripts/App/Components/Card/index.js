import React from "react";

export default (props) => {
  return (
    <div className="component_card">
      <div className="component_content">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${props.thumb})`,
          }}
        >
          <div className="layer">
            <div>
              <h5>
                <i className={`${props.emoji}`}></i>
                {props.name}
              </h5>
              <h6>
                <i className={`${props.icon}`}></i>
                {props.position}
              </h6>
              <q>
                <i className="far fa-heart"></i>
                {props.love}
              </q>
            </div>

            <a className="twitter" href={props.twitter} target="_blank">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
