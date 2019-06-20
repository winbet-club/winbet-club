import React from 'react';
import styled from 'styled-components';

import { IMenuNavItem, MobileMenuIcon } from 'atoms';
// import { colors } from 'context';

interface IProps {
  menuNavItemsList: IMenuNavItem[];
  onMenuClick: (value: string) => void;
  onMobileMenuClick: () => void;
}

import { Logo, MenuNav } from 'atoms';

export const MenuDesktop = (
  { menuNavItemsList, onMenuClick, onMobileMenuClick }: IProps
) => (
<Wrapper>
  <Logo/>
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
  background: linear-gradient(to bottom, rgba(36,36,36,1) 0%, rgba(19,19,19,1) 100%)
`;
 