import React from 'react';
import styled from 'styled-components';

import { CommonWrapper } from 'organisms';
import { INavItem } from 'atoms';
import { DescriptionBlock, Slider } from 'molecules';
import { textConstants } from 'context';
import { aboutBg } from 'images';

const { aboutUsHeader, aboutUsText } = textConstants;

interface IAboutUs {
  onNavClick: (value: string) => void;
  navList: INavItem;
}

export const AboutUs = (
  { onNavClick, navList }: IAboutUs
) => (
<Wrapper>
  <CommonWrapper onNavClick={onNavClick} navList={navList}>
    <Slider/>
    <DescriptionBlock img={aboutBg}>
      <H2>{aboutUsHeader}</H2>
      <Text>{aboutUsText}</Text>
    </DescriptionBlock>
  </CommonWrapper>
</Wrapper>
);

const Wrapper = styled.div`

`;

const H2 = styled.h2`

`;

const Text = styled.p`

`;
