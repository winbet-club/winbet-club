import React from 'react';
import styled from 'styled-components';

import { IMenuNavItem, MobileMenuIcon, Logo, MenuNav, Flag } from 'atoms';
import { rusFlag, usaFlag } from 'images';

interface IProps {
  menuNavItemsList: IMenuNavItem[];
  isMobileMenuOpen: any;
  onMenuClick: (value: string) => void;
  onMobileMenuClick: () => void;
  onMainLogoClick: () => void;
  changeLanguage: (value: string) => void;
}

export const MenuDesktop = (
  { menuNavItemsList, onMenuClick, onMobileMenuClick, onMainLogoClick, changeLanguage }: IProps
) => (
<Wrapper>
  <Logo onMainLogoClick={onMainLogoClick} />
  <Languages>
    <Flag src={rusFlag} language='ru' changeLanguage={changeLanguage}/>
    <Flag src={usaFlag} language='en' changeLanguage={changeLanguage}/>
  </Languages>
  <MenuNav menuNavItemsList={menuNavItemsList} onMenuClick={onMenuClick} />
  <MobileMenuIcon onMobileMenuClick={onMobileMenuClick}/>
</Wrapper>
);

const Wrapper = styled.div`
  height: 67px;
  padding: 0 30px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background: linear-gradient(to bottom, rgba(36,36,36,1) 0%, rgba(19,19,19,1) 100%);
`;

const Languages = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 570px) {
    display: none;
  }
`;
 