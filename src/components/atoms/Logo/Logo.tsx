import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mainLogo } from 'images';

export const Logo = () => (
  <Link to=''>
    <Wrapper/>
  </Link>
);

const Wrapper = styled.div`
  background: url(${mainLogo});
  width: 150px;
  height: 31px;
`;
 