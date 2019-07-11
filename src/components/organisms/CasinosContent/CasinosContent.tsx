import React from 'react';
import styled from 'styled-components';

import { PageDescription } from 'atoms';
import {  Slider, CasinosList, JackpotCardsList } from 'molecules';
import { textConstants, colors } from 'context';

const { winbetMinsk } = textConstants;

export const CasinosContent = ({jackpotsValues}: any) => (
  <Wrapper>
    <JackpotCardsListWrapper>
      <JackpotCardsList cardJackpotData={jackpotsValues} />
    </JackpotCardsListWrapper>
    <Slider/>
    <PageDescription text={winbetMinsk} address='Русияова 1' />
    <CasinosList/>
  </Wrapper>
)

const Wrapper = styled.div`
`;

const JackpotCardsListWrapper = styled.div`
  background: ${colors.background1};
`;