import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mainLogo } from 'images';

interface IProps {
  onMainLogoClick: () => void;
}


export const Logo = ({onMainLogoClick}: IProps) => (
  <Link to=''>
    <Wrapper onClick={onMainLogoClick}/>
  </Link>
);

const Wrapper = styled.div`
  background: url(${mainLogo});
  width: 150px;
  height: 31px;
`;
 