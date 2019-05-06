import React from 'react';
import styled from 'styled-components';

import { DescriptionBlock, Slider } from 'molecules';
import { textConstants, colors } from 'context';
import { corrieraBg } from 'images';

const { corrierHeader, corrierText } = textConstants;

export const CorriereContent = () => (
  <Wrapper>
    <Slider/>
    <DescriptionBlock img={corrieraBg}>
      <H2>{corrierHeader}</H2>
      <Text>{corrierText}</Text>
    </DescriptionBlock>
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

const Text = styled.p``;
