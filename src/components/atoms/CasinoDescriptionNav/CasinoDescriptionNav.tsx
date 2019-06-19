import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { menuIcon } from 'images';
import { colors } from 'context';
import { linkTransformator } from 'helpers';

interface INavListItem {
  value: string;
  isActive: boolean;
}

interface IProps {
  navList: INavListItem[];
  activeCasino: string;
  onClick: (value: string) => any;
}

export const CasinoDescriptionNav = (
  { navList, activeCasino, onClick }: IProps
) => {
  return (
    <Wrapper>
      <MenuIcon/>
      <List>
        {
          navList.map(({value, isActive}: INavListItem) => {
            const bindClick = (v: string) => onClick(v);
            const link = value === 'главная' ? `${activeCasino}` : `${activeCasino}/${linkTransformator[value]}`
            return (
              <Link key={value} to={link}>
                <NavValue
                  isActive={isActive}
                  onClick={bindClick(value)}
                >
                  {value.toUpperCase()}
                </NavValue>
              </Link>
            )
          })
        }
      </List>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  color: ${colors.white};
  background: ${colors.silver1};
  border-bottom: 4px solid ${colors.silver2};
  padding-right: 30px;
  @media (max-width: 994px) {
    padding-right: 0;
    padding-top: 15px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 10px;
  
  @media (max-width: 994px) {
    flex-direction: column;
    align-items: center;
  }
  & a {
    text-decoration: none;
    color: ${colors.white};
  }
`;
const NavValue = styled.li<{isActive: boolean}>`
  margin-right: 10px;
  list-style-type: none;
  @media (max-width: 994px) {
    padding: 10px;
  }
`;

const MenuIcon = styled.div`
  @media (min-width: 994px) {
    display: none;
  }
  background: url(${menuIcon});
  background-size: 24px 24px;
  width: 24px;
  height: 25px;
  margin: 0 20px 0 auto;
`;