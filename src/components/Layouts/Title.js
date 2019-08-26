import React from "react";

const Title = ({ name, title }) => {
  return (
    <div>
      <h1>
        {name} <span>{title}</span>
      </h1>
    </div>
  );
};

export default Title;
