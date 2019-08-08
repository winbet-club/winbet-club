import React from 'react';
import styled from 'styled-components';

import { Slider, Promo, JackpotCardsList } from 'molecules';
import { colors } from 'context';
import { sliderBg } from 'images';

export const HomeContent = ({jackpotsValues}: any) => (
  <Wrapper>
    <JackpotCardsListWrapper>
      <JackpotCardsList cardJackpotData={jackpotsValues} />
    </JackpotCardsListWrapper>
    <SliderWrapper/>
    <Slider/>
    <Promo/>
  </Wrapper>
)

const Wrapper = styled.div``;

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
