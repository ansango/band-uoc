import React from "react";
import Parallax from "../../Components/Parallax";
import neon from "../../../../images/parallax/neon.jpg";
import neon2 from "../../../../images/parallax/neon2.jpg";
import clouds from "../../../../images/parallax/clouds.jpg";
export default () => {
  return (
    <div className="view_news">
      <Parallax
        img={neon}
        height={500}
        isTitle
        isAlbum
        title={"heartbeats it's out!"}
        album={clouds}
      />
      <div className="container">
        <h2 className="">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </h2>
        <h4 className="">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Far far away, behind the word mountains. Far far away,
          behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts.
        </h4>
      </div>
      <div className="container">
        <hr className=""></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ol>
              <li>
                <strong>Item One</strong>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics.
                </p>
              </li>
              <li>
                <strong>Item Two</strong>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </li>
              <li>
                <strong>Item Three</strong>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </h2>
          </div>
          <div className="col-md-6">
            <h4>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmark- sgrove right at the coast of the Semantics,
              a large language ocean. Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove
            </h4>
          </div>
        </div>
      </div>
      <Parallax
        img={neon2}
        height={500}
        isSocial
        socialTitle={"Check the list!"}
        tracks={tracks}
      />
      <div className="container">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Far far away, behind the word mountains.
        </p>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const tracks = [
  {
    id: 1,
    name: "Hooks",
    duration: 4.31,
  },
  {
    id: 2,
    name: "Press",
    duration: 3.51,
  },
  {
    id: 3,
    name: "Finder",
    duration: 5.19,
  },
  {
    id: 4,
    name: "Router",
    duration: 5.21,
  },
  {
    id: 5,
    name: "Null",
    duration: 2.35,
  },
  {
    id: 6,
    name: "Functional",
    duration: 3.15,
  },
];
