import React from "react";
import Card from "../../Components/Card";
import Contact from "../../Components/Contact";
export default () => {
  return (
    <div>
      <div className="container container-cards">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              position={item.position}
              img={item.img}
            />
          );
        })}
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

const items = [
  {
    name: "Anibal",
    position: "guitar",
    img: "me",
  },
  {
    name: "Anibal",
    position: "guitar",
  },
  {
    name: "Anibal",
    position: "guitar",
  },
  {
    name: "Anibal",
    position: "guitar",
  },
  {
    name: "Anibal",
    position: "guitar",
  },
  {
    name: "Anibal",
    position: "guitar",
  },
];
