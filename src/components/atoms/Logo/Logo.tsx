import React from 'react';
import styled from 'styled-components';
import { mainLogo } from 'images';

export const Logo = () => (
  <Wrapper/>
);

const Wrapper = styled.div`
  background-image: url(${mainLogo});
  width: 150px;
  height: 31px;
`;
 