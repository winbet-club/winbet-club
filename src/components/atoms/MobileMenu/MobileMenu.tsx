import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

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
    itemsList.map(({value, isActive}) => <NavItem key={value} isActive={isActive}>{value.toUpperCase()}</NavItem>)
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
  color: ${colors.cadetGray};
  font-size: 14px;
  padding: 10px 0;
`;
 