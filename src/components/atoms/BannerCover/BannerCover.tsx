import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface IProps {
  text?: string;
}

export const BannerCover = (
  {text}: IProps
) => (
<Wrapper>
  { text }
</Wrapper>
);

const Wrapper = styled.div`
  display: none;
  position: absolute;
  background: ${colors.silver4};
  height: 100%;
  width: 100%;
`;
