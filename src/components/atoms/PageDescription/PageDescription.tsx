import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

import { colors } from 'context';

interface IProps {
  text: any;
  address?: string;
}

export const PageDescription = (
  { text, address }: IProps // TODO Change type
) => {
  const [ word1, city ] = text.split(' ');
  return (
    <Wrapper>
      <H2>{word1.toUpperCase()} <GoldSpan><Translate id={city}/></GoldSpan></H2>
      { address && <Address><Translate id={address}/></Address>}
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
