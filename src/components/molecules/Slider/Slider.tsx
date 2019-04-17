import React from 'react';
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";

import { banner_1, banner_2 } from 'images';

const imagesArr = [
  { url: banner_1 },
  { url: banner_2 },
]

export const Slider = (
  {  }: any
) => (
<Wrapper>
  <SimpleImageSlider
    width={1000}
    height={200}
    images={imagesArr}
  />
</Wrapper>
);

const Wrapper = styled.div`

`;
