import React from 'react';
import styled from 'styled-components';

import { textConstants, colors } from 'context';

const { currencyBYN } = textConstants;

interface IProps {
  jackpotValue: number; // May be different type
}

export const CardJeckpot = (
  { jackpotValue }: IProps
) => (
<Wrapper>
  <CardSuit>Image</CardSuit>
  <JackpotValuesBlock>
    {jackpotValue}
    <Currency>
      {
        currencyBYN.split('').map((letter: string, i) => <CurrencyLetter key={i}>{letter.toUpperCase()}</CurrencyLetter>)
      }
    </Currency>
  </JackpotValuesBlock>
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.crow};
  border-radius: 3px;
`;

const Currency = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CurrencyLetter = styled.span`
  color: ${colors.darkGray};
`;

const CardSuit = styled.div`
  width: 48px;
  height: 48px;
`;

const JackpotValuesBlock =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

