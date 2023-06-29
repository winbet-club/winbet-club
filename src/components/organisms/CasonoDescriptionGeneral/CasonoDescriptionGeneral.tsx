import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { Translate } from "react-localize-redux";

import { AboutCasino, PromoNote, IPromoNote } from "atoms";
import { ICasinosListNav } from "reducers";
import { imageGallery, textConstants, eventsList, colors, panaramImagesLink } from "context";
import { CasinoDescriptionCommonPart } from "organisms";

const { gallery, actions } = textConstants;

interface IProps {
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  jackpotsValues: any[];
  isMobileMenuDescriptionCasinoOpen: boolean;
  onClick: (value: string) => void;
  casinoClick: (value: string) => void;
  onDescripionMenuClick: () => void;
}

export const CasonoDescriptionGeneral = ({
  casinosListNav,
  activeCasino,
  onClick,
  onDescripionMenuClick,
  isMobileMenuDescriptionCasinoOpen,
  jackpotsValues,
  casinoClick
}: IProps) => (
  <CasinoDescriptionCommonPart
    jackpotsValues={jackpotsValues}
    casinosListNav={casinosListNav}
    activeCasino={activeCasino}
    onClick={onClick}
    onDescripionMenuClick={onDescripionMenuClick}
    isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
    casinoClick={casinoClick}
  >
    <PaddingWrapper>
      <InfoBlock>
        <AboutCasino activeCasino={activeCasino} />
        <Iframe src={`${panaramImagesLink[activeCasino]}`} />
      </InfoBlock>
      <InfoBlockBorderBottom />
      <GaleryAndPromo>
        <ImageGalleryWrapper>
          <Header>
            <Translate id={gallery} />
            <Address>
              <Translate id={activeCasino} />
            </Address>
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
          {/* <NotesList
            headerName=""
            promoList={promoList}
            activeCasino="nemiga"
          /> */}

          <Action>
            <ActionHeader>
              <Translate id={actions} />
            </ActionHeader>
            {eventsList[activeCasino].map(({ header, text }: IPromoNote) => (
              <PromoNote key={header} header={header} text={text} />
            ))}
          </Action>
        </Promo>
      </GaleryAndPromo>
    </PaddingWrapper>
  </CasinoDescriptionCommonPart>
);

const Iframe = styled.iframe`
  width: 100%;
  height: 600px;
  margin-left: 50px;
  @media (max-width: 994px) {
    margin-left: 0;
  }
  @media (max-width: 650px) {
    height: 450px;
  }
`;

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

const Action = styled.div``;

const ActionHeader = styled.h3`
  color: ${colors.yellow};
  margin-bottom: 30px;
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