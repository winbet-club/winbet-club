import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/img/main-logo.png';

export const Logo = () => (
  <Wrapper />
);

const Wrapper = styled.div`
  background-image: url(${img});
`;
 