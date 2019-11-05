import React from 'react';
import styled from 'styled-components';

import { PageDescription } from 'atoms';
import {  Slider, CasinosList, JackpotCardsList, YaMap } from 'molecules';
import { textConstants, colors } from 'context';
import { sliderBg } from 'images';

const { winbetMinsk } = textConstants;

export const CasinosContent = ({jackpotsValues, casinoClick}: any) => (
  <Wrapper>
    <JackpotCardsListWrapper>
      <JackpotCardsList cardJackpotData={jackpotsValues} />
    </JackpotCardsListWrapper>
    <SliderWrapper/>
    <Slider/>
    <PageDescription text={winbetMinsk} />
    <CasinosList casinoClick={casinoClick}/>
    <YaMap/>
  </Wrapper>
)

const Wrapper = styled.div`
`;


const SliderWrapper = styled.div`
  width: 100%;
  height: 220px;
  background: url(${sliderBg}) no-repeat;
  background-size: cover;
  filter: blur(1px);
  position: absolute;
  z-index: 0;

  @media screen and (min-width: 560px) {
    height: 400px;
  }
  @media screen and (min-width: 980px) {
    height: 480px;
  }
`;

const JackpotCardsListWrapper = styled.div`
  background: ${colors.background1};
`;