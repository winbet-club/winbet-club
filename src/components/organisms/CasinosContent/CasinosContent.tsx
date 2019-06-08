import React from 'react';
import styled from 'styled-components';

import { PageDescription } from 'atoms';
import {  Slider, CasinosList } from 'molecules';

// const { corrierHeader, corrierText } = textConstants;

export const CasinosContent = () => (
  <Wrapper>
    <Slider/>
    <PageDescription text='winbet минск'/>
    <CasinosList/>
  </Wrapper>
)
const Wrapper = styled.div`
`;
