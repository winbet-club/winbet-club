import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'context';
import { linkTransformator } from 'helpers';

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
          <Link key={value} to={`/${linkTransformator[value]}`}>
            <NavItem isActive={isActive} onClick={onItemClick} >{value.toUpperCase()}</NavItem>
          </Link>
        )
      })
    }
  </Ul>
</Wrapper>
);

const Wrapper = styled.div`
  & a {
    text-decoration: none;
  };
  @media screen and (max-width: 992px) {
    display: none;
  }
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
 