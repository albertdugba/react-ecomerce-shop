import React from "react";
import styled from "styled-components";

import Title from "../Layouts/Title";

const Featured = () => {
  return (
    <FeaturedCard>
      <Title name="Featured" title="Products" />
      {/* I want to get some of the products from the context api and display them here */}
    </FeaturedCard>
  );
};

const FeaturedCard = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export default Featured;
