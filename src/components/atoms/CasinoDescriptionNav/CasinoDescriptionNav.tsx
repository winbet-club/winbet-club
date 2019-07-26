import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

import { menuIcon } from 'images';
import { colors } from 'context';

interface INavListItem {
  value: string;
  isActive: boolean;
}

interface IProps {
  navList: INavListItem[];
  activeCasino: string;
  isMobileMenuDescriptionCasinoOpen: boolean;
  onClick: (value: string) => any;
  onDescripionMenuClick: () => any;
}

export const CasinoDescriptionNav = (
  { navList, activeCasino, onClick, onDescripionMenuClick, isMobileMenuDescriptionCasinoOpen }: IProps
) => {
  return (
    <Wrapper>
      <MenuIcon onClick={onDescripionMenuClick} />
      <List isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen} >
        {
          navList.map(({value, isActive}: INavListItem) => {
            const bindClick = () => onClick(value);
            const link = `${activeCasino}-${value}`;
            return (
              <Link key={value} to={link}>
                <NavValue
                  isActive={isActive}
                  onClick={bindClick}
                >
                  <Translate id={`${value}`}/>
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

const List = styled.ul<{isMobileMenuDescriptionCasinoOpen: boolean}>`
  display: ${({ isMobileMenuDescriptionCasinoOpen }) => isMobileMenuDescriptionCasinoOpen ? `flex` : `none`};
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
  color: ${({isActive}) => isActive ? `${colors.yellow}` : `${colors.white}`};
  margin-right: 10px;
  list-style-type: none;
  @media (max-width: 994px) {
    padding: 10px;
  }
`;

const MenuIcon = styled.div`
  @media (min-width: 994px) {
    display: none;
  };
  background: url(${menuIcon});
  background-size: 24px 24px;
  width: 24px;
  height: 25px;
  margin: 0 20px 0 auto;
`;