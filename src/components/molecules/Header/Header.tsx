import React from 'react';
import styled from 'styled-components';

import { INavItem } from 'atoms';
import { colors } from 'context';

interface IProps {
  hours: string;
  minutes: string;
  seconds: string;
  navList: INavItem[];
  onNavClick: (value: string) => void;
}

import { HeaderWatch, HeaderNav } from 'atoms';

export const Header = (
  { hours, minutes, seconds, navList, onNavClick }: IProps
) => (
<Wrapper>
  <HeaderWatch
    hours={hours}
    minutes={minutes}
    seconds={seconds}
  />
  <HeaderNav
    navList={navList}
    onNavClick={onNavClick}
  />
</Wrapper>
);

const Wrapper = styled.div`
  height: 33px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.black};
`;
 