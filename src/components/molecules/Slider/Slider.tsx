import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import { banner_1, banner_2 } from 'images';

const imagesArr = [
  { original: banner_1 },
  { original: banner_2 },
]

export const Slider = (
  {  }: any
) => (
<Wrapper>
  <ImageGallery items={imagesArr} />
</Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`;
