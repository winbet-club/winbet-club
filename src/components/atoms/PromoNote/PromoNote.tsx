import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

export interface IPromoNote {
  header: string;
  text: string;
}

export const PromoNote = ( // TODO DO common component to promo and event
  { header, text }: IPromoNote
) => (
  <Wrapper>
    <Header><Translate id={header}/></Header>
    <Text><Translate id={text}/></Text>
  </Wrapper>    
);

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border: 1px solid;
  border-image: linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
  -webkit-border-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
`;

const Header = styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
`;

const Text = styled.p`
  line-height: 25px;
  text-indent: 30px;
`;
