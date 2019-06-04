import React from 'react';
import styled from 'styled-components';

import { INavItem } from 'atoms';
import { colors } from 'context';

interface IProps {
  time: string;
  navList: INavItem[];
  onNavClick: (value: string) => void;
}

import { HeaderWatch, HeaderNav } from 'atoms';

export const Header = (
  { time, navList, onNavClick }: IProps
) => (
<Wrapper>
  <HeaderWatch
    time={time}
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
  @media screen and (max-width: 570px) {
    display: none;
  }
`;
 