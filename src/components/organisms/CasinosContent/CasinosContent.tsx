import React from 'react';
import styled from 'styled-components';

import { PageDescription } from 'atoms';
import {  Slider, CasinosList, JackpotCardsList } from 'molecules';
import { textConstants, cardJackpodDataMock, colors } from 'context';

const { winbetMinsk } = textConstants;

export const CasinosContent = () => (
  <Wrapper>
    <JackpotCardsListWrapper>
      <JackpotCardsList cardJackpotData={cardJackpodDataMock} />
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