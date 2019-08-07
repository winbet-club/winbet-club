import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import { banner_1, banner_2, banner_3 } from 'images';
import { colors } from 'context';

const imagesArr = [
  { original: banner_1, thumbnail: banner_1 },
  { original: banner_2, thumbnail: banner_2 },
  { original: banner_3, thumbnail: banner_3 },
]

export const Slider = () => (
  <Wrapper>
    <ImageGallery
      items={imagesArr}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
      autoPlay={true}
      slideInterval={5000}
      showThumbnails={false}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 600px;
  border-bottom: 4px solid ${colors.bordo};
  margin: auto;
`;
