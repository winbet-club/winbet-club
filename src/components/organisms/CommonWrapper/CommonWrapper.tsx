import React from 'react';
import styled from 'styled-components';

import { Header } from 'molecules';
import { Footer } from 'atoms';
import { textConstants } from 'context';

const { footerText } = textConstants;

interface ICommonWrapper {
  children: any;
}

export const CommonWrapper = (
  { children }: ICommonWrapper
) => (
<Wrapper>
  <Header  />
    {children}
  <Footer text={footerText} />
</Wrapper>
);

const Wrapper = styled.div`

`;
