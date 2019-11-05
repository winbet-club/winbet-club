import React from 'react';
import styled from 'styled-components';
import { Translate } from "react-localize-redux";

import { colors } from 'context';

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
  <Description>
    <Translate id={description}/>
  </Description>
</Wrapper>
);

const Wrapper = styled.div`
  width: 45%;
  padding: 10px;
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
  text-indent: 20px;
  line-height: 25px;
  color: ${colors.white};
  font-size: 14px;
`;
