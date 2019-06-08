import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

export const PageDescription = (
  text: any // TODO Change type
) => {
  const [ word1, word2 ] = text.split(' ');
  return (
    <Wrapper>
      <H2>{word1.toUpperCase()} <GoldSpan>{word2.toUpperCase()}</GoldSpan></H2>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background: ${colors.gray2};
`;

const H2 = styled.h2`

`;

const GoldSpan = styled.span`
  color: ${colors.lightGold};
`;
