import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface IMenuNavItem {
  value: string;
  isActive: boolean;
}

interface IProps {
  menuNavItemsList: IMenuNavItem[];
}

export const MenuNav = (
  { menuNavItemsList }: IProps
) => (
<Wrapper>
  <Ul>
    {
      menuNavItemsList.map(({value, isActive}: IMenuNavItem) => <NavItem key={value} isActive={isActive}>{value.toUpperCase()}</NavItem>)
    }
  </Ul>
</Wrapper>
);

const Wrapper = styled.div`

`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li<{isActive: boolean}>`
  color: ${({isActive}) => isActive ? `${colors.yellow}` : `${colors.black}`};
  list-style-type: none;
  margin-right: 15px;
  font-weight: bold;
`;
 