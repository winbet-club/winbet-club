import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface INavItem {
  value: string;
  isActive: boolean;
}

interface IProps {
  navList: INavItem[];
}

export const HeaderNav = (
  { navList }: IProps
) => (
<Wrapper>
  <Nav>
    {
      navList.map(({value, isActive}: INavItem) => <NavItem key={value} isActive={isActive} >{value.toUpperCase()}</NavItem> )
    }
  </Nav>
</Wrapper>
);

const Wrapper = styled.div`

`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li<{isActive: boolean}>`
  color: ${({ isActive }) => isActive ? `${colors.gray}` : `${colors.blackGray}`};
  list-style-type: none;
  margin-right: 10px;
  font-size: 11px;
  &:hover {
    color: ${colors.gray};
  }
`;

