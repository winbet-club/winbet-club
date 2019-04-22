import React from 'react';
import styled from 'styled-components';

import { jackpotcardsLogo , jackpotcardsLogoMobi } from 'images'

interface ICard {
  image: HTMLImageElement;
  jackpotValue: number;
}

interface IProps {
  cardJackpotData: ICard[];
}

import { CardJeckpot } from 'atoms';

export const JackpotCardsList = (
  { cardJackpotData }: IProps
) => (
<Wrapper>
  <Logo image={jackpotcardsLogo}/>
  {
    cardJackpotData.map((card: ICard, i) =>
      <CardJeckpot key={i} jackpotValue={card.jackpotValue} image={card.image}/> )
  }
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.div<{image: HTMLImageElement}>`
  width: 113px;
  height: 53px;
  background: ${({image}) => `url(${image}) no-repeat`};
  background-position-y: center;
  background-size: contain;
  @media screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 580px) {
    background: url(${jackpotcardsLogoMobi}) center no-repeat;
  }
`;
 