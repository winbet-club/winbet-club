import React from 'react';
import styled from 'styled-components';

interface INavElem {
  value: string;
  isActive: boolean;
}

interface IProps {
  itemsList: INavElem[];
}

export const MobileMenu = (
  { itemsList }: IProps
) => (
<Wrapper>
  {
    itemsList.map(({value, isActive}) => <NavItem key={value} isActive={isActive}>{value}</NavItem>)
  }
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.div<{isActive: boolean}>`

`;
 