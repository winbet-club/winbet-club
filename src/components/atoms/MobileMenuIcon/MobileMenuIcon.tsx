import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface IProps {
  onMobileMenuClick: () => void;
}

import { textConstants } from 'context';

const { menu } = textConstants;

export const MobileMenuIcon = (
  { onMobileMenuClick }: IProps
) => (
<Wrapper onClick={onMobileMenuClick} >
  <Icon/>
  {menu.toUpperCase()}
</Wrapper>
);

const Wrapper = styled.div`
  width: 66px;
  height: 18px;
  background: ${colors.red};
  border-bottom-left-radius: 10px;
  padding: 10px;
  color: ${colors.white};
  font-size: 16px;
`;

const Icon = styled.span`
  &::before {
    content: "\f0c9";
  }
`;
 