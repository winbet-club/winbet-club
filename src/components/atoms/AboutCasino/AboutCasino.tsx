import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

import { textConstants, casinosDescriptions, colors } from 'context';

const { aboutCasino } = textConstants;

interface IProps {
  activeCasino: string;
}

export const AboutCasino = (
  { activeCasino }: IProps
) => (
<Wrapper>
  <Header><Translate id={aboutCasino}/></Header>
  <Text>
    {
      <Text><Translate id={casinosDescriptions[activeCasino]}/></Text>
    }
  </Text>
</Wrapper>
);

const Wrapper = styled.div`
  width: 25%;
  color: ${colors.white};
  @media (max-width: 994px) {
    width: 100%;
  }
`;

const Header = styled.h2`
  font-size: 30px;
  border-bottom: 1px solid;
  border-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
  margin-bottom: 30px;
`;

const Text = styled.div`
  margin-bottom: 15px;
`;