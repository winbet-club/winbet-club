import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';
import { textConstants, promoImgList } from 'context';

const { promo } = textConstants;

export const Promo = () => (
  <Wrapper>
    <Container>
      <Header>{promo.toUpperCase()}</Header>
      <BannersField>
        {
          promoImgList.map((img) => 
            <Banner key={img}>
              <BannerImg src={img}/>
            </Banner>
          )
        }
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
  @media screen and (max-width: 1250px) {
    width: 100%; 
    padding: 0 30px;
    box-sizing: border-box;
  }
`;

const BannerImg = styled.img`
  width: 100%;
`;

const Banner = styled.div`
  width: 50%;
  background-size: contain;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const BannersField = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  & div:nth-child(1) {
    margin-right: 10px;
  }
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    & div:nth-child(1) {
      margin: 0 0 10px;
    }
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

