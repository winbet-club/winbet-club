import React from 'react';
import styled from 'styled-components';

import { jackpotcardsLogo , jackpotcardsLogoMobi } from 'images'
import { cardImagesList } from 'context';

// interface ICard {
//   image: HTMLImageElement;
//   jackpotValue: number;
// }

interface IProps {
  cardJackpotData?: any[];
}

import { CardJeckpot } from 'atoms';

export const JackpotCardsList = (
  { cardJackpotData }: IProps
) => (
<Wrapper>
  <Logo/>
  {
    cardJackpotData && // Delete 
    cardJackpotData.map(({ value }, i) => <CardJeckpot key={i} jackpotValue={value} image={cardImagesList[i]}/> )
  }
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  padding: 40px 0;
`;

const Logo = styled.div`
  width: 113px;
  height: 53px;
  background: url(${jackpotcardsLogo}) no-repeat;
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
 