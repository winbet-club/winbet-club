import React from 'react';
import styled from 'styled-components';

import { DescriptionBlock, Slider } from 'molecules';
import { textConstants, colors } from 'context';
import { aboutBg } from 'images';

const { aboutUsHeader, aboutUsText } = textConstants;

export const AboutUsContent = () => (
  <Wrapper>
    <Slider/>
    <DescriptionBlock img={aboutBg}>
      <H2>{aboutUsHeader}</H2>
      <Text>{aboutUsText}</Text>
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
