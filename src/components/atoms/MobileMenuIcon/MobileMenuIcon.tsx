import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

import { colors } from 'context';
import { menuIcon } from 'images';

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
  <Translate>
    {({ translate }) => <h1>{(translate(`${menu}`) as string).toUpperCase()}</h1>}
  </Translate>
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
  display: none;
  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

const Icon = styled.span`
  background: url(${menuIcon});
  background-size: 14px 16px;
  width: 14px;
  height: 16px;
  color: ${colors.white};
  margin-right: 8px;
`;
 