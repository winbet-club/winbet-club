import React from 'react';
import styled from 'styled-components';

import { Slider, Promo, JackpotCardsList } from 'molecules';
import { colors } from 'context';

export const HomeContent = ({jackpotsValues}: any) => {
  console.log({jackpotsValues});
  return   <Wrapper>
  <JackpotCardsListWrapper>
      <JackpotCardsList cardJackpotData={jackpotsValues} />
  </JackpotCardsListWrapper>
  <Slider/>
  <Promo/>
</Wrapper>
}

const Wrapper = styled.div``;

const JackpotCardsListWrapper = styled.div`
  background: ${colors.background1};
`;
