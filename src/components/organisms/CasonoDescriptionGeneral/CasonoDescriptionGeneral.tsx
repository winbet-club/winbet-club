import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

import { AboutCasino, PromoNote, IPromoNote } from 'atoms';
import { ICasinosListNav } from 'reducers';
import { colors, imageGallery, textConstants, addressTransformator, eventsList, promoList } from 'context';
import { CasinoDescriptionCommonPart } from 'organisms';
import { NotesList } from 'molecules';

const { promo } = textConstants;
const { gallary, actions } = textConstants;

interface IProps {
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  onClick: (value: string) => void;
}
  
export const CasonoDescriptionGeneral = (
  { casinosListNav, activeCasino, onClick }: IProps
) => (
    <CasinoDescriptionCommonPart casinosListNav={casinosListNav} activeCasino={activeCasino} onClick={onClick}>
      <PaddingWrapper>
        <InfoBlock>
          <AboutCasino activeCasino={activeCasino} />
        </InfoBlock>
        <InfoBlockBorderBottom/>
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
        <NotesList headerName={promo} promoList={promoList}/>
        <Action>
          <ActionHeader>{actions.toUpperCase()}</ActionHeader>
          {
            eventsList.map(({header, text}: IPromoNote) => 
              <PromoNote key={header} header={header} text={text} />)
          }
        </Action>
        </Promo>
        </GaleryAndPromo>
      </PaddingWrapper>
    </CasinoDescriptionCommonPart>
  );

const PaddingWrapper = styled.div`
  padding: 0 30px;
  margin-bottom: 40px;
`;

const InfoBlock = styled.div`
  padding: 30px 0;
  display: flex;
  @media (max-width: 994px) {
    flex-direction: column;
  }
`;

const InfoBlockBorderBottom = styled.div`
  height: 1px;
  background: -webkit-radial-gradient(50% 0%, 50% 5px, #000 0%, #3e3a31 100%);  
  margin-bottom: 30px;
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

