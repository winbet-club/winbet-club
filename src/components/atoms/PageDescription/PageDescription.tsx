import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface IProps {
  text: any;
  address?: string;
}

export const PageDescription = (
  { text, address }: IProps // TODO Change type
) => {
  const [ word1, word2 ] = text.split(' ');
  return (
    <Wrapper>
      <H2>{word1.toUpperCase()} <GoldSpan>{word2.toUpperCase()}</GoldSpan></H2>
      { address && <Address>{address}</Address>}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background: ${colors.gray2};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const H2 = styled.h2`
  font-size: 40px;
  color: ${colors.white};
  padding: 20px;
`;

const Address = styled.p`
  color: ${colors.white};
  font-size: 25px;
  padding-bottom: 20px;
`;

const GoldSpan = styled.span`
  color: ${colors.lightGold};
`;
