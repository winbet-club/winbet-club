import React from 'react';
import styled from 'styled-components';

import { Slider } from 'molecules';
import { textConstants, colors } from 'context';

const { winbetGames } = textConstants;

export const GameListContent = () => (
  <Wrapper>
    <Slider/>
    <H2>{winbetGames}</H2>
  </Wrapper>
)
const Wrapper = styled.div`
`;

const H2 = styled.h2`
  padding: 80px 0 30px;
  color: ${colors.lightGold};
  font-weight: 600;
  font-size: 40px;
`;

// const Text = styled.p``;