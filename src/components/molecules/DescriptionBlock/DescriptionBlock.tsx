import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface ICorriera {
  children: any; // TODO Check
  img: string;
}

export const DescriptionBlock = (
  { children, img }: ICorriera
) => (
  <Wrapper>
    <Description>
      {children}
    </Description>
    <Image src={img} />
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${colors.liteDarkSilver};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, rgba(0, 0, 0, 0), #d9761b, rgba(0, 0, 0, 0)) 100% 0;
  color: white;
  display: flex;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  margin: auto;
`;

const Description = styled.div`

`;
