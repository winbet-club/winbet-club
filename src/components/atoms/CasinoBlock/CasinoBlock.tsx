import React from 'react';
import styled from 'styled-components';

interface IProps {
  image: string;
  description: string;
}

export const CasinoBlock = (
  { image, description }: IProps
) => (
<Wrapper image={image}>
  {description}
</Wrapper>
);

const Wrapper = styled.div<{image: string}>`
  background: url(image);
  width: 290px;
  height: 270px;
`;
 