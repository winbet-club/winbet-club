import React from 'react';
import styled from 'styled-components';

import { colors, textConstants } from '../../../context'; // Use alias

export const TestComponent = () => (
  <Wrapper>
    <Welcome>{textConstants.welcome}</Welcome>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid ${colors.black};
`;

const Welcome = styled.h1`
  text-align: center;
`;

