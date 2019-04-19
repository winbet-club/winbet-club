import React from 'react';
import styled from 'styled-components';

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
  {
    cardJackpotData.map((card: ICard, i) =>
      <CardJeckpot key={i} jackpotValue={card.jackpotValue} image={card.image}/> )
  }
</Wrapper>
);

const Wrapper = styled.div`

`;
 