import React from 'react';
import styled from 'styled-components';

import { IMenuNavItem, MobileMenuIcon, Logo, MenuNav, MobileMenu } from 'atoms';
// import { colors } from 'context';

interface IProps {
  menuNavItemsList: IMenuNavItem[];
  isMobileMenuOpen: any;
  onMenuClick: (value: string) => void;
  onMobileMenuClick: () => void;
  onMainLogoClick: () => void;
}

export const MenuDesktop = (
  { menuNavItemsList, isMobileMenuOpen, onMenuClick, onMobileMenuClick, onMainLogoClick }: IProps
) => (
<Wrapper>
  <Logo onMainLogoClick={onMainLogoClick} />
  <MenuNav menuNavItemsList={menuNavItemsList} onMenuClick={onMenuClick} />
  <MobileMenuIcon onMobileMenuClick={onMobileMenuClick}/>
  <MobileMenu itemsList={menuNavItemsList} isMobileMenuOpen={isMobileMenuOpen} />
</Wrapper>
);

const Wrapper = styled.div`
  height: 67px;
  padding: 0 30px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background: linear-gradient(to bottom, rgba(36,36,36,1) 0%, rgba(19,19,19,1) 100%)
`;
 