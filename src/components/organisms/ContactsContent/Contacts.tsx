import React from 'react';
import styled from 'styled-components';

import { CasinoAddress } from 'atoms';

interface IProps {
  casinosInfo: ICasinosInfo[];
}

interface ICasinosInfo {
  casinoAddress: string;
  casinoName: string;
  casinoWorkTime: string;
  workDays: string;
}

export const ContactsContent = (
  { casinosInfo }: IProps
) => (
<Wrapper>
  {
    casinosInfo.map(({casinoAddress, casinoName, casinoWorkTime, workDays}) =>
      <CasinoAddress
        key={casinoAddress}
        casinoAddress={casinoAddress}
        casinoName={casinoName}
        casinoWorkTime={casinoWorkTime}
        workDays={workDays}
      />)
  }
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
