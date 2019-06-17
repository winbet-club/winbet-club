import React from 'react';
import styled from 'styled-components';
import { colors } from 'context';

interface INavListItem {
  value: string;
  isActive: boolean;
}

interface IProps {
  navList: INavListItem[];
  onClick: (value: string) => any;
}

export const CasinoDescriptionNav = (
  { navList, onClick }: IProps
) => {
  

  return (
    <Wrapper>
      <List>
        {
          navList.map(({value, isActive}: INavListItem) => {
            const bindClick = (v: string) => onClick(v);
            return <NavValue key={value} isActive={isActive} onClick={bindClick(value)}>{value.toUpperCase()}</NavValue>
          }

            )
        }
      </List>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  color: ${colors.white};
  background: ${colors.silver1};
  border-bottom: 4px solid ${colors.silver2};

`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 10px;
`;
const NavValue = styled.li<{isActive: boolean}>`
  margin-right: 10px;
  list-style-type: none;

`;