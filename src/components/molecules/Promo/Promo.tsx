import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';
import { banner_1 } from "images";

export const Promo = () => (
<Wrapper>
  <Banner image={banner_1}/>
</Wrapper>
);

const Wrapper = styled.div`
  border-top: 40px solid ${colors.darkSilver};
  border-bottom: 40px solid ${colors.darkSilver};
`;

const Banner = styled.div<{image: HTMLImageElement}>`
  width: 300px;
  height: 300px;
  background: url(image);
`;
 