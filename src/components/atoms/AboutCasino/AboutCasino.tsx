import React from 'react';
import styled from 'styled-components';

import { textConstants, casinosDescriptions, colors } from 'context';

const { aboutCasino } = textConstants;

interface IProps {
  activeCasino: string;
}

export const AboutCasino = (
  { activeCasino }: IProps
) => (
<Wrapper>
  <Header>{aboutCasino.toUpperCase()}</Header>
  <Text>
    {
      casinosDescriptions[activeCasino].map((paragraph: string, i: number) => 
      <Text key={i}>{paragraph}</Text>)
    }
  </Text>
</Wrapper>
);

const Wrapper = styled.div`
  width: 25%;
  color: ${colors.white};
`;

const Header = styled.h2`
  font-size: 30px;
  /* border: 1px solid;
  border-image: linear-gradient(right,rgba(0, 0, 0, 0), #efe3bd, rgba(0, 0, 0, 0) ) 0 0 100%; */
`;

const Text = styled.p`
  margin-bottom: 15px;
`;