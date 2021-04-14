import React from "react";
import Hero from "../../Components/Hero";
export default () => {
  return (
    <div className="home">
      <div className="container title-container text-center">
        <h1 className="fw-bold title">
          We are <code class="text-primary">!==</code> undefined
        </h1>
      </div>
      <Hero />
    </div>
  );
};
