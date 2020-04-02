import React from "react";
import styled from "styled-components";

import { newsList } from "context";
import { NewsBlock } from "molecules";

export const NewsList = () => (
  <Wrapper>
    {newsList.map(({ imgUrl, header, date, text }) => (
      <NewsBlock
        key={header}
        imgUrl={imgUrl}
        header={header}
        date={date}
        text={text}
      />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  /* @media screen and (max-width: 570px) {
    display: none;
  } */
`;
