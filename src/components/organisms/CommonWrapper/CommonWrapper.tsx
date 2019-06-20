import React from 'react';
import styled from 'styled-components';

import { Header, MenuDesktop } from 'molecules';
import { Footer, MobileMenu } from 'atoms';
import { textConstants } from 'context';

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
}

export const CommonWrapper = (
  {
    children, navList, menuNavItemsList, isMobileMenuOpen, onNavClick, onMenuClick, onMobileMenuClick,
    menuFullNavItemsList, time,
  }: ICommonWrapper
) => (
<Wrapper>
  <Header navList={navList} time={time} onNavClick={onNavClick} />
  <MenuDesktop
    menuNavItemsList={menuNavItemsList}
    onMenuClick={onMenuClick}
    onMobileMenuClick={onMobileMenuClick}
  />
  <TabletMenuWrapper>
    <MobileMenu itemsList={menuNavItemsList} isMobileMenuOpen={isMobileMenuOpen} />
  </TabletMenuWrapper>

  <MobileMenuWrapper>
    <MobileMenu itemsList={menuFullNavItemsList} isMobileMenuOpen={isMobileMenuOpen} />
  </MobileMenuWrapper>
  
    {children}
  <Footer text={footerText} />
</Wrapper>
);

const Wrapper = styled.div`
  background: green;
`;

const TabletMenuWrapper = styled.div`
  @media screen and (max-width: 570px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  @media screen and (min-width: 570px) {
    display: none;
  }
`;
