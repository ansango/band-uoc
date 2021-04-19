import React from "react";
import balls from "../../../../images/gallery/balls.jpg";
import disco from "../../../../images/gallery/disco.jpg";
import dj from "../../../../images/gallery/dj.jpg";
import dj2 from "../../../../images/gallery/dj2.jpg";
import dj3 from "../../../../images/gallery/dj3.jpg";
import dj4 from "../../../../images/gallery/dj4.jpg";
import people from "../../../../images/gallery/people.jpg";
import points from "../../../../images/gallery/points.jpg";

export default () => {
  return (
    <div className="gallery">
      {images.map((image, index) => {
        return (
          <figure className={`gallery__item gallery__item--${image.id}`}>
            <img src={image.url} className="gallery__img" alt={image.name} />
          </figure>
        );
      })}
    </div>
  );
};

const images = [
  {
    id: 1,
    url: balls,
    name: "balls",
  },
  {
    id: 2,
    url: disco,
    name: "balls",
  },
  {
    id: 3,
    url: dj,
    name: "balls",
  },
  {
    id: 4,
    url: dj2,
    name: "balls",
  },
  {
    id: 5,
    url: dj3,
    name: "balls",
  },
  {
    id: 6,
    url: dj4,
    name: "balls",
  },
  {
    id: 7,
    url: people,
    name: "balls",
  },
  {
    id: 8,
    url: points,
    name: "balls",
  },
];
