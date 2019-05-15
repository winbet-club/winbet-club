import React from 'react';
import styled from 'styled-components';

import { IMenuNavItem, MobileMenuIcon } from 'atoms';
import { colors } from 'context';

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
  background: ${colors.oil};
`;
 