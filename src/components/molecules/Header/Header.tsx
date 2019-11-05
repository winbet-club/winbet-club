import React from 'react';
import styled from 'styled-components';

import { INavItem, Flag } from 'atoms';
import { colors } from 'context';
import { rusFlag, usaFlag } from 'images';

interface IProps {
  time: string;
  navList: INavItem[];
  onNavClick: (value: string) => void;
  changeLanguage: (value: string) => void;
}

import { HeaderWatch, HeaderNav } from 'atoms';

export const Header = (
  { time, navList, onNavClick, changeLanguage }: IProps
) => (
<Wrapper>
  <HeaderWatch
    time={time}
  />
  <Languages>
    <Flag src={rusFlag} language='ru' changeLanguage={changeLanguage}/>
    <Flag src={usaFlag} language='en' changeLanguage={changeLanguage}/>
  </Languages>
  <HeaderNav
    navList={navList}
    onNavClick={onNavClick}
  />
</Wrapper>
);

const Wrapper = styled.div`
  height: 33px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.black};
  @media screen and (max-width: 570px) {
    display: none;
  }
`;
 
const Languages = styled.div`
  margin-left: 120px;
  width: 90px;
  display: flex;
  justify-content: space-between;
`;
