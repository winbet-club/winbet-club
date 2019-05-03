import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'context';
import { linkTransformator } from 'helpers';

export interface INavItem {
  value: string;
  isActive: boolean;
}

interface IProps {
  navList: INavItem[];
  onNavClick: (value: string) => void;
}

export const HeaderNav = (
  { navList, onNavClick }: IProps
) => (
  <Wrapper>
    <Nav>
      {
        navList.map(({value, isActive}: INavItem) => {
          const onNavItemClick = () => onNavClick(value);

          return (
            <Link to={`/${linkTransformator[value]}`} key={value}>
              <NavItem
                isActive={isActive}
                onClick={onNavItemClick}
                value={value}
              >
                {value.toUpperCase()}
              </NavItem>
            </Link>
          )
        }
          )
      }
    </Nav>
  </Wrapper>
);

const Wrapper = styled.div`
  & a {
    text-decoration: none;
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li<{isActive: boolean}>`
  color: ${({ isActive }) => isActive ? `${colors.gray}` : `${colors.blackGray}`};
  list-style-type: none;
  margin-right: 10px;
  font-size: 11px;
  &:hover {
    color: ${colors.gray};
  }
`;

