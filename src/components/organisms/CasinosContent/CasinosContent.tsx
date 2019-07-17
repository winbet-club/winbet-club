import React from 'react';
import styled from 'styled-components';

import { PageDescription } from 'atoms';
import {  Slider, CasinosList, JackpotCardsList, YaMap } from 'molecules';
import { textConstants, colors } from 'context';

const { winbetMinsk } = textConstants;

export const CasinosContent = ({jackpotsValues, casinoClick}: any) => (
  <Wrapper>
    <JackpotCardsListWrapper>
      <JackpotCardsList cardJackpotData={jackpotsValues} />
    </JackpotCardsListWrapper>
    <Slider/>
    <PageDescription text={winbetMinsk} />
    <CasinosList casinoClick={casinoClick}/>
    <YaMap/>
  </Wrapper>
)

const Wrapper = styled.div`
`;

const JackpotCardsListWrapper = styled.div`
  background: ${colors.background1};
`;