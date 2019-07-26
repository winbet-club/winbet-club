import React from 'react';
import styled from 'styled-components';
import { Translate } from "react-localize-redux";

import { DescriptionBlock, Slider } from 'molecules';
import { textConstants, colors } from 'context';
import { aboutBg } from 'images';

const { aboutUsText, aboutUs } = textConstants;

export const AboutUsContent = () => (
  <Wrapper>
    <Slider/>
    <DescriptionBlock img={aboutBg}>
      <H2>
        <Translate id={aboutUs} />
      </H2>
      <Text>
        {aboutUsText.split('<newString>').map((str: string, i: number) => <Text key={i}>{str}</Text>)}
      </Text>
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

const Text = styled.div`
  text-indent: 20px;
  line-height: 25px;
`;
