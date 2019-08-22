import React from "react";

const Flower = ({ title, price, img, alt }) => {
  return (
    <div>
      <div>
        <img
          src={img}
          alt={alt}
          style={{ width: "180px", height: "200px" }}
          className="card-img-container"
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Flower;
