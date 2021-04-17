import React from "react";

export default (props) => {
  return (
    <div className="component_card">
      <div className="component_content">
        <div
          className="my-1 thumbnail"
          style={{
            backgroundImage: `url(${props.thumb})`,
          }}
        >
          <div>
            <h5 className="fw-bold">
              <i className={`${props.emoji} fs-6 text-primary mx-2`}></i>
              {props.name}
            </h5>
            <h6>
              <i className={`${props.icon} fs-6 text-primary mx-2`}></i>
              {props.position}
            </h6>
            <q>
              <i className="far fa-heart fs-6 text-primary mx-2"></i>
              {props.love}
            </q>
          </div>
          <a className="twitter mt-3" href={props.twitter} target="_blank">
            <i className="fab fa-twitter fs-4" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
