import React from 'react';
import styled from 'styled-components';

export interface IPromoNote {
  header: string;
  text: string;
}

export const PromoNote = ( // TODO DO common component to promo and event
  { header, text }: IPromoNote
) => (
  <Wrapper>
    <Header>{header}</Header>
    <Text>{text}</Text>
  </Wrapper>    
);

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border: 1px solid;
  border-image: linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
  -webkit-border-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
`;

const Header = styled.h3`
  margin-bottom: 15px;
`;

const Text = styled.p`

`;
