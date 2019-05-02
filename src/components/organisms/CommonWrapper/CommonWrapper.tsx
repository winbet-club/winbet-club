import React from 'react';
import styled from 'styled-components';

import { Header } from 'molecules';
import { Footer } from 'atoms';
import { textConstants } from 'context';

const { footerText } = textConstants;

interface ICommonWrapper {
  children: any;
  navList: any;
  onNavClick: (value: string) => void;
}

export const CommonWrapper = (
  { children, navList, onNavClick }: ICommonWrapper
) => (
<Wrapper>
  <Header navList={navList} seconds='12' minutes='12' hours='10'  onNavClick={onNavClick} />
  {/* <MenuDesktop  /> */}
    {children}
  <Footer text={footerText} />
</Wrapper>
);

const Wrapper = styled.div`

`;
