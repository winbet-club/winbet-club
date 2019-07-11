import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'context';
import { linkTransformator } from 'helpers';

interface INavElem {
  value: string;
  isActive: boolean;
}

interface IProps {
  itemsList: INavElem[];
  isMobileMenuOpen: boolean;
  onMenuFullNavItemsListClick?: (value: string) => void;
}

export const MobileMenu = (
  { itemsList, isMobileMenuOpen, onMenuFullNavItemsListClick }: IProps
) => (
<Wrapper isMobileMenuOpen={isMobileMenuOpen}>
  {
    itemsList.map(({value, isActive}) => {
      if(onMenuFullNavItemsListClick) {
        const bindClick = () => onMenuFullNavItemsListClick(value);

        return (
          <Link to={`/${linkTransformator[value]}`} key={value}>
            <NavItem
              key={value}
              isActive={isActive}
              onClick={bindClick}
            >{value.toUpperCase()}</NavItem>
          </Link>
        )
      }
      return;
    })}
</Wrapper>
);

const Wrapper = styled.div<{isMobileMenuOpen: boolean}>`
  & a {
    text-decoration: none;
  };
  display: ${({isMobileMenuOpen}) => isMobileMenuOpen ? `flex` : `none`};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(90deg, #2e2e2e 10%, #4b4b4b 90%);
  @media screen and (min-width: 998px) {
    display: none;
  }
`;

const NavItem = styled.div<{isActive: boolean}>`
  color: ${({ isActive }) => isActive ? `${colors.yellow}` : `${colors.cadetGray}`};
  font-size: 14px;
  padding: 10px 0;
`;
 