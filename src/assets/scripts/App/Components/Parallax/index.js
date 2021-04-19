import React from "react";
export default (props) => {
  let parallax = (
    <div
      className="parallax d-flex align-items-center"
      style={{
        backgroundImage: `url(${props.img})`,
        minHeight: `${props.height}px`,
      }}
    >
      <div className="container">
        {props.isTitle && (
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <h1 className="text-white">{props.title}</h1>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              {props.isAlbum && (
                <div className="album">
                  <div
                    className="cover"
                    style={{
                      backgroundImage: `url(${props.album})`,
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        )}
        {props.isSocial && (
          <div className="text-white">
            <div className="row mt-5">
              <h2 className="text-center">{props.socialTitle}</h2>
            </div>
            <div className="row">
              <div className="col-md-6 my-5">
                <ol>
                  {props.tracks &&
                    props.tracks.map((track, index) => {
                      return (
                        <li key={index} id={`track-${index}`}>
                          <div className="track-data">
                            <small className="me-1">{index + 1}</small>
                            <span className="me-1">-</span>
                            <strong className="me-1">{track.name}</strong>
                            <span className="me-1">-</span>
                            <small className="me-1">{track.duration}</small>
                          </div>
                          <div className="track-options">
                            <span className="me-3">
                              <i className="fas fa-play"></i>
                            </span>
                            <span className="me-3">
                              <i className="fas fa-info-circle"></i>
                            </span>
                          </div>
                        </li>
                      );
                    })}
                </ol>
              </div>
              <div className="col-md-6 social mb-5">
                <div className="my-2">
                  <i className="fab fa-spotify"></i>
                  <i className="fab fa-apple"></i>
                  <i className="fab fa-youtube"></i>
                </div>
                <div className="my-2">
                  <i className="fab fa-google-play"></i>
                  <i className="fab fa-xbox"></i>
                  <i className="fab fa-soundcloud"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  return parallax;
};
