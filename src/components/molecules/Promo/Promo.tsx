import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

import { colors } from 'context';
import { textConstants, promoImgList } from 'context';

const { promo } = textConstants;

export const Promo = () => (
  <Wrapper>
    <Container>
      <Header><Translate id={promo}/></Header>
      <BannersField>
        {
          promoImgList.map(({img, header, description}) => 
            <Banner key={img} description={description}>
              <BannerCover>
                <PromoHeader><Translate id={header}/></PromoHeader>
                  <Translate id={description}/>
              </BannerCover>
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


const BannerCover = styled.div`
  display: none;
  position: absolute;
  background: ${colors.silver4};
  height: 100%;
  width: 100%;
  opacity: .8;
  color: ${colors.white};
  padding: 30px;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 30px;
`;


const Banner = styled.div<{description: string}>`
  width: 50%;
  background-size: contain;
  position: relative;
  &:hover ${BannerCover} {
    display: block;
  }
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
  margin-bottom: 20px;
  display: flex;
  font-weight: 600;
  color: ${colors.white};
  font-size: 30px;
  border-bottom: 1px solid;
  border-image: linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
`;

const PromoHeader = styled.h2`
  margin-bottom: 20px;
  height: 40px;
  display: flex;
  font-weight: 600;
  color: ${colors.white};
  font-size: 30px;
  border-bottom: 1px solid;
  border-image: linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;
