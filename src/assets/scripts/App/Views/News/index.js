import React from "react";
import Parallax from "../../Components/Parallax";
import Contact from "../../Components/Contact";
import parallax from "../../../../images/parallax/parallax.jpg";
export default () => {
  return (
    <div className="view_news">
      <Parallax img={image} />
      <div className="container title-container">
        <h2>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </h2>
        <h3>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Far far away, behind the word mountains. Far far away,
          behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts.
        </h3>
      </div>
      <div className="container">
        <hr></hr>
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
            <h3>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </h3>
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
      <Parallax img={image} />
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

const image = parallax;

console.log(image);
