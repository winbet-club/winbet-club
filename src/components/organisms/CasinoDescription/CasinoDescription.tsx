import React from 'react';
import styled from 'styled-components';

import { CasinoDescriptionNav, AboutCasino } from 'atoms';
import ImageGallery from 'react-image-gallery';
import { ICasinosListNav } from 'reducers';
import { colors, imageGallery } from 'context';

interface IProps {
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  onClick: (value: string) => void;
}
  
export const CasinoDescription = (
  { casinosListNav, activeCasino, onClick }: IProps
) => (
    <Wrapper>
      <CasinoDescriptionNav navList={casinosListNav} onClick={onClick} />
      <InfoBlock>
        <AboutCasino activeCasino={activeCasino} />
      </InfoBlock>
      <GaleryAndPromo>
        <ImageGallery 
          items={imageGallery[activeCasino]}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={false}
          autoPlay={true}
          slideInterval={5000}
          showThumbnails={true}
        />
      </GaleryAndPromo>
    </Wrapper>
  );

const Wrapper = styled.div`
  background: ${colors.silver1};
`;

const InfoBlock = styled.div`

`;

const GaleryAndPromo = styled.div`
  width: 50%;
  display: flex;
`;

