import React from "react";
import Card from "../../Components/Card";
export default () => {
  return (
    <div>
      <div className="container container-cards">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              quote={item.quote}
              position={item.position}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

const items = [
  {
    name: "Anibal",
    position: "guitar",
    quote: "Life is hard",
  },
  {
    name: "Anibal",
    position: "guitar",
    quote: "Life is hard",
  },
  {
    name: "Anibal",
    position: "guitar",
    quote: "Life is hard",
  },
  {
    name: "Anibal",
    position: "guitar",
    quote: "Life is hard",
  },
  {
    name: "Anibal",
    position: "guitar",
    quote: "Life is hard",
  },
  {
    name: "Anibal",
    position: "guitar",
    quote: "Life is hard",
  },
];
