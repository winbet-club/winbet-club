import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

import { ICasinosListNav } from 'reducers';
import { CasinoDescriptionCommonPart } from 'organisms';
import { imageGallery } from 'context';

interface IProps {
  jackpotsValues: any;
  promoList: any; // TODO check
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  isMobileMenuDescriptionCasinoOpen: boolean;
  onClick: (value: string) => void;
  casinoClick: (value: string) => void;
  onDescripionMenuClick: () => void;
}
  
export const CasinoDescriptionGallary = (
  { jackpotsValues, promoList, casinosListNav, activeCasino, onClick,
    isMobileMenuDescriptionCasinoOpen, onDescripionMenuClick, casinoClick }: IProps
) => (
    <CasinoDescriptionCommonPart
      jackpotsValues={jackpotsValues}
      casinosListNav={casinosListNav}
      activeCasino={activeCasino}
      onClick={onClick}
      onDescripionMenuClick={onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
      casinoClick={casinoClick}
    >
      <Wrapper>
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
      </Wrapper>
    </CasinoDescriptionCommonPart>
);

const Wrapper = styled.div`
  padding: 40px 40px;
  /* width: 48%; */
  margin: auto;
`;