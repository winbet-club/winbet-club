import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CasinoDescriptionNav, AboutCasino, PromoNote, IPromoNote, Contacts, SmallCasinoBlock } from 'atoms';
import ImageGallery from 'react-image-gallery';
import { ICasinosListNav } from 'reducers';
import { colors, imageGallery, textConstants, addressTransformator, promoList, actionsList,
  casinosAddressWithImg } from 'context';

const { gallary, promo, actions } = textConstants;

interface IProps {
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  onClick: (value: string) => void;
}
  
export const CasinoDescription = (
  { casinosListNav, activeCasino, onClick }: IProps
) => (
    <Wrapper>
      <CasinosList>
        {
          casinosAddressWithImg.map(({img, address, url}) => // Check link
            <Link key={address} to={url}><SmallCasinoBlock description={address} image={img} /></Link>)
        }
      </CasinosList>
      <CasinoDescriptionNav navList={casinosListNav} onClick={onClick} />
      <PaddingWrapper>
        <InfoBlock>
          <AboutCasino activeCasino={activeCasino} />
        </InfoBlock>
        <GaleryAndPromo>
          <ImageGalleryWrapper>
            <Header>{gallary} 
              <Address>{addressTransformator[activeCasino].address}</Address>
            </Header>
            <ImageGallery 
              items={imageGallery[activeCasino]}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={false}
              autoPlay={true}
              slideInterval={5000}
              showThumbnails={true}
              showNav={false}
            />
          </ImageGalleryWrapper>
        <Promo>
          <PromoHeader>{promo.toUpperCase()}</PromoHeader>
          {
            promoList.map(({header, text}: IPromoNote) => 
              <PromoNote key={header} header={header} text={text} />)
          }
        <Action>
          <ActionHeader>{actions.toUpperCase()}</ActionHeader>
          {
            actionsList.map(({header, text}: IPromoNote) => 
              <PromoNote key={header} header={header} text={text} />)
          }
        </Action>
        </Promo>
        </GaleryAndPromo>
      </PaddingWrapper>

      <Contacts activeCasino={activeCasino} />
    </Wrapper>
  );

const Wrapper = styled.div`
  background: ${colors.silver1};
  color: ${colors.white};
`;

const PaddingWrapper = styled.div`
  padding: 0 30px;
`;

const InfoBlock = styled.div`

`;

const CasinosList = styled.div`
  display: flex;
  justify-content: center;
`;

const Action = styled.div`

`;

const ActionHeader = styled.h3`
  font-size: 30px;
`;

const Promo = styled.div`
  width: 50%;
  margin-left: 20px;
  @media (max-width: 994px) {
    width: 100%;
  }
`;

const PromoHeader = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Address = styled.span`
  font-size: 20px;
  margin-left: 10px;
`;

const Header = styled.div`
  background: ${colors.silver3};
  padding: 5px 15px;
  font-size: 30px;
`;


const ImageGalleryWrapper = styled.div`
  width: 50%;
  @media (max-width: 994px) {
    width: 100%;
  }
`;

const GaleryAndPromo = styled.div`
  display: flex;
  @media (max-width: 994px) {
    flex-direction: column;
  }
`;

