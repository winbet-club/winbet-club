import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

export interface IMenuNavItem {
  value: string;
  isActive: boolean;
}

interface IProps {
  menuNavItemsList: IMenuNavItem[];
  onMenuClick: (value: string) => void;
}

export const MenuNav = (
  { menuNavItemsList, onMenuClick }: IProps
) => (
<Wrapper>
  <Ul>
    {
      menuNavItemsList.map(({value, isActive}: IMenuNavItem) => {
        const onItemClick = () => onMenuClick(value);
        
        return (
          <NavItem key={value} isActive={isActive} onClick={onItemClick} >{value.toUpperCase()}</NavItem>
        )
      })
    }
  </Ul>
</Wrapper>
);

const Wrapper = styled.div`
  /* TODO Add styles */
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li<{isActive: boolean}>`
  color: ${({isActive}) => isActive ? `${colors.yellow}` : `${colors.white}`};
  list-style-type: none;
  margin-right: 15px;
  font-weight: bold;
`;
 