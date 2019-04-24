import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';
import { promo_1, promo_2 } from "images";
import { textConstants } from 'context';

const { promo } = textConstants;

export const Promo = () => (
<Wrapper>
  <Container>
    <Header>{promo.toUpperCase()}</Header>
    <BannersField>
      <Banner>
        <BannerImg src={promo_1}/>
      </Banner>
      <Banner>
        <BannerImg src={promo_2}/>
      </Banner>
    </BannersField>
  </Container>
</Wrapper>
);

const Wrapper = styled.div`
  background-color: #434343;
  box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.4);
  border-top: 40px solid ${colors.darkSilver};
  border-bottom: 40px solid ${colors.darkSilver};
`;

const Container = styled.div`
  width: 1170px;
  margin: auto;
  @media screen and (max-width: 992px) {
    width: 744px; 
  }
  @media (max-width: 768px) {

  }
`;

const BannerImg = styled.img`

`;

const Banner = styled.div`
  width: 50%;
  height: 330px;
  background-size: contain;
  @media screen and (max-width: 992px) {
    width: 744px;
    /* height: 425px; */
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BannersField = styled.div`
  display: flex;
  width: 100%;
  /* height: 330px; */
  margin-bottom: 20px;
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Header = styled.h2`
  width: 35%;
  height: 40px;
  display: flex;
  font-weight: 600;
  color: ${colors.white};
  border-bottom: 1px solid;
  border-image: linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
`;

