import React from 'react';
import styled from 'styled-components';

import { IMenuNavItem } from 'atoms';

interface IProps {
  menuNavItemsList: IMenuNavItem[];
  onMenuClick: (value: string) => void;
}

import { Logo, MenuNav } from 'atoms';

export const MenuDesktop = (
  { menuNavItemsList, onMenuClick }: IProps
) => (
<Wrapper>
  <Logo/>
  <MenuNav menuNavItemsList={menuNavItemsList} onMenuClick={onMenuClick} />
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;   
`;
 