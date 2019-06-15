import React from 'react';
import styled from 'styled-components';

import { PageDescription } from 'atoms';
import {  Slider, CasinosList } from 'molecules';
import { textConstants } from 'context';

const { winbetMinsk } = textConstants;

export const CasinosContent = () => (
  <Wrapper>
    <Slider/>
    <PageDescription text={winbetMinsk} address='Русияова 1' />
    <CasinosList/>
  </Wrapper>
)
const Wrapper = styled.div`
`;
