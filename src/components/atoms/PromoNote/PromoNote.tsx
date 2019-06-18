import React from 'react';
import styled from 'styled-components';

export interface IPromoNote {
  header: string;
  text: string;
}

export const PromoNote = (
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
  border-bottom: 1px solid silver;
`;

const Header = styled.h3`
  margin-bottom: 15px;
`;

const Text = styled.p`

`;
