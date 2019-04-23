import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';
import { promo_1, promo_2 } from "images";
import { textConstants } from 'context';

const { promo } = textConstants;

export const Promo = () => (
<Wrapper>
  <Header>{promo.toUpperCase()}</Header>
  <BannersField>
    <Banner image={promo_1}/>
    <Banner image={promo_2}/>
  </BannersField>
</Wrapper>
);

const Wrapper = styled.div`
  background-color: #434343;
  box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.4);
  border-top: 40px solid ${colors.darkSilver};
  border-bottom: 40px solid ${colors.darkSilver};
`;

const Banner = styled.div<{image: HTMLImageElement}>`
  width: 50%;
  height: 330px;
  background: ${({image}) => `url(${image}) no-repeat`};
  background-size: contain;
`;

const BannersField = styled.div`
  display: flex;
  width: 100%;
  height: 330px;
`;

const Header = styled.h2`
  width: 35%;
  height: 40px;
  display: flex;
  font-weight: 600;
  color: ${colors.white};
  border-bottom: 1px solid;
  border-image: linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
`;

