import React from 'react';
import styled from 'styled-components';

import { DescriptionBlock, Slider } from 'molecules';
import { textConstants, colors, vacancyList } from 'context';
import { careeraBg } from 'images';

const { careerHeader, careerText, vacancy } = textConstants;

export const CareerContent = () => (
  <Wrapper>
    <Slider/>
    <DescriptionBlock img={careeraBg}>
      <H2>{careerHeader}</H2>
      <Text>{careerText}</Text>
      <H2>{vacancy}</H2>
      <Ul>
        {vacancyList.map((vacan: string, i: number) => <Li key={vacan}>{vacan}</Li>)}
      </Ul>
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

const Text = styled.p`
  text-indent: 20px;
  line-height: 25px;
`;

const Ul = styled.ul``;

const Li = styled.li`
  font-size: 18px;
  line-height: 25px;
`;

