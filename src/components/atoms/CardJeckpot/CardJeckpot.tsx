import React from 'react';
import styled from 'styled-components';

import { textConstants, colors } from 'context';

const { currencyBYN } = textConstants;

interface IProps {
  jackpotValue: number;
  image: HTMLImageElement;
}

export const CardJeckpot = (
  { jackpotValue, image }: IProps
) => (
<Wrapper>
  <CardSuit image={image}/>
  <JackpotValuesBlock>
    {
      jackpotValue.toString().split('').map((value: string, i: number) => <LeftBorder key={i}>{value}</LeftBorder>)
    }  

    <Currency>
      {
        currencyBYN.split('').map((letter: string, i) => <CurrencyLetter key={i}>{letter.toUpperCase()}</CurrencyLetter>)
      }
    </Currency>
  </JackpotValuesBlock>
</Wrapper>
);

const Wrapper = styled.div`
  border-bottom-color: rgb(53, 53, 53);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.crow};
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(0deg, rgb(38, 38, 38) 10%, rgb(20, 20, 20) 90%);
  width: 20%;


  @media screen and (max-width: 1200px) {
    width: 24%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 992px) {
    width: calc(40% - 4px);
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 650px) {
    width: calc(50% - 4px);
    margin-bottom: 10px;
  }
  @media screen and (max-width: 580px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Currency = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-left: 1px solid #1d1a15;
`;

const CurrencyLetter = styled.span`
  color: ${colors.darkGray};
  font-size: 10px;
`;

const CardSuit = styled.div<{image: HTMLImageElement}>`
  width: 48px;
  height: 48px;
  background: ${({image}) => `url(${image}) no-repeat top center`};
`;

const JackpotValuesBlock =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${colors.white};
`;

const LeftBorder = styled.div`
  border-left: 1px solid;
  border-image: linear-gradient(to top, rgba(0, 0, 0, 0), #c2beb0, rgba(0, 0, 0, 0)) 0 100%;
  padding: 0 2px;
`;

