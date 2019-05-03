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
  width: 100%;

`;

const Description = styled.div`
  padding-left: 50px;
  @media screen and (max-width: 992px) {
    width: 750px;
    padding: 0 0 30px;
    margin: auto;
  }
  @media screen and (max-width: 780px) {
    width: 100%;
    padding: 0 15px 30px;
    box-sizing: border-box;
    & p {
      font-size: 14px;
    }
    & h2 {
      font-size: 30px;
      padding: 45px 0 20px;
    }
  }
`;
