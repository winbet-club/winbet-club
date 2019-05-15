import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface INavElem {
  value: string;
  isActive: boolean;
}

interface IProps {
  itemsList: INavElem[];
  isMobileMenuOpen: boolean;
}

export const MobileMenu = (
  { itemsList, isMobileMenuOpen }: IProps
) => (
<Wrapper isMobileMenuOpen={isMobileMenuOpen}>
  {
    itemsList.map(({value, isActive}) => <NavItem key={value} isActive={isActive}>{value.toUpperCase()}</NavItem>)
  }
</Wrapper>
);

const Wrapper = styled.div<{isMobileMenuOpen: boolean}>`
  display: ${({isMobileMenuOpen}) => isMobileMenuOpen ? `flex` : `none`};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(90deg, #2e2e2e 10%, #4b4b4b 90%);
  @media screen and (min-width: 998px) {
    display: none;
  }
`;

const NavItem = styled.div<{isActive: boolean}>`
  color: ${colors.cadetGray};
  font-size: 14px;
  padding: 10px 0;
`;
 