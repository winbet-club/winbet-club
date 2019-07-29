import React from 'react';
import styled from 'styled-components';

import { Header, MenuDesktop } from 'molecules';
import { Footer, MobileMenu } from 'atoms';
import { textConstants, colors } from 'context';

const { footerText } = textConstants;

interface ICommonWrapper {
  time: string;
  children: any;
  navList: any;
  menuNavItemsList: any;
  menuFullNavItemsList: any;
  isMobileMenuOpen: boolean;
  onNavClick: (value: string) => void;
  onMenuClick: (value: string) => void;
  onMobileMenuClick: () => void;
  onMainLogoClick: () => void;
  onMenuFullNavItemsListClick: (value: string) => void;
  changeLanguage: (value: string) => void;
}

export const CommonWrapper = (
  {
    children, navList, menuNavItemsList, isMobileMenuOpen, onNavClick, onMenuClick, onMobileMenuClick,
    menuFullNavItemsList, time, onMenuFullNavItemsListClick, onMainLogoClick, changeLanguage
  }: ICommonWrapper
) => (
<Wrapper>
  <Header navList={navList} time={time} onNavClick={onNavClick} changeLanguage={changeLanguage} />
  <MenuDesktop
    isMobileMenuOpen={isMobileMenuOpen}
    menuNavItemsList={menuNavItemsList}
    onMenuClick={onMenuClick}
    onMobileMenuClick={onMobileMenuClick}
    onMainLogoClick={onMainLogoClick}
  />
  <TabletMenuWrapper>
    <MobileMenu
      itemsList={menuNavItemsList}
      isMobileMenuOpen={isMobileMenuOpen}
      onMenuClick={onMenuClick}
    />
  </TabletMenuWrapper>

  <MobileMenuWrapper>
    <MobileMenu
      itemsList={menuFullNavItemsList}
      isMobileMenuOpen={isMobileMenuOpen}
      onMenuFullNavItemsListClick={onMenuFullNavItemsListClick}
    />
  </MobileMenuWrapper>
  
    {children}
  <Footer text={footerText} />
</Wrapper>
);

const Wrapper = styled.div`
  background: ${colors.color2};
`;

const TabletMenuWrapper = styled.div`
  display: none;
  @media screen and (min-width: 570px) and (max-width: 993px) {
    display: block;
  }
`;

const MobileMenuWrapper = styled.div`
  @media screen and (min-width: 570px) {
    display: none;
  }
`;
