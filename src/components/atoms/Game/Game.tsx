import React from 'react';
import styled from 'styled-components';

interface IGame {
  name: string;
  description: string;
  nameColor: any;
}
export const Game = (
  { name, description, nameColor }: IGame
) => (
<Wrapper>
  <Name nameColor={nameColor}>{name.toUpperCase()}</Name>
  <Description>{description}</Description>
</Wrapper>
);

const Wrapper = styled.div`
  width: 50%;
  margin-bottom: 10px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
const Name = styled.h2<{nameColor: any}>`
  color: ${({ nameColor }) => nameColor};
  font-size: 30px;
  margin-bottom: 20px;
`;
const Description = styled.p`

`;
