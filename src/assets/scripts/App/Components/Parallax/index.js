import React from "react";
export default (props) => {
  let vNewsTitle = (
    <div className="row">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1>Stay Tuned!</h1>
        <h3>{props.title}</h3>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <code className="logo">!==</code>
      </div>
    </div>
  );
  let vNewsSocial = (
    <div className="text-white">
      <div className="row">
        <h2 className="text-center">{props.socialTitle}</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ol>
            {props.tracks &&
              props.tracks.map((track, index) => {
                return (
                  <li key={index} id={`track-${index}`}>
                    <div className="track-data">
                      <small>{index + 1}</small>
                      <span>-</span>
                      <strong>{track.name}</strong>
                      <span>-</span>
                      <small>{track.duration}</small>
                    </div>
                    <div className="track-options">
                      <span>
                        <i className="fas fa-play"></i>
                      </span>
                      <span>
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </div>
                  </li>
                );
              })}
          </ol>
        </div>
        <div className="col-md-6 social">
          <div>
            <i className="fab fa-spotify"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <div>
            <i className="fab fa-google-play"></i>
            <i className="fab fa-xbox"></i>
            <i className="fab fa-soundcloud"></i>
          </div>
        </div>
      </div>
    </div>
  );
  let vTourTitle = (
    <div className="row text-center text-sm-end">
      <h1>{props.title}</h1>
    </div>
  );
  let parallax = (
    <div
      className="parallax d-flex align-items-center"
      style={{
        backgroundImage: `url(${props.img})`,
        minHeight: `${props.height}px`,
      }}
    >
      <div className="container">
        {props.isTitle && vNewsTitle}
        {props.isSocial && vNewsSocial}
        {props.isTour && vTourTitle}
      </div>
    </div>
  );
  return parallax;
};
