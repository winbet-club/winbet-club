import React from 'react';
import styled from 'styled-components';

import { Slider, Promo } from 'molecules';

export const HomeContent = () => (
  <Wrapper>
    <Slider/>
    <Promo/>
  </Wrapper>
)

const Wrapper = styled.div``;
