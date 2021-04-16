import React from "react";

export default (props) => {
  return (
    <div className={`note text-${props.position}`}>
      <figure>
        <blockquote cite={props.url}>
          <p className="fst-italic">"{props.content}"</p>
        </blockquote>
        <figcaption>
          <span className="fw-bold">—{props.author}</span>,{" "}
          <cite>{props.cite}</cite>
        </figcaption>
      </figure>
    </div>
  );
};
