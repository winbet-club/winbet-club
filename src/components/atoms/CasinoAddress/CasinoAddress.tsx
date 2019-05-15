import React from 'react';
import styled from 'styled-components';

import { textConstants } from 'context';

const { address, workTime } = textConstants;

interface ICasinoAddress {
  casinoName: string;
  casinoAddress: string;
  workDays: string;
  casinoWorkTime: string;
}

export const CasinoAddress = (
  { casinoName, casinoAddress, workDays, casinoWorkTime }: ICasinoAddress
) => (
<Wrapper>
  <Name>{casinoName}</Name>

  <Address>{address}</Address>
  <Description>{casinoAddress}</Description>

  <WorkTime>{workTime}</WorkTime>
  <Description>{workDays}</Description>
  <Description>{casinoWorkTime}</Description>

</Wrapper>
);

const Wrapper = styled.div`

`;

const Name = styled.h2`

`;

const Address = styled.h3`

`;

const WorkTime = styled.h3`

`;

const Description = styled.p`

`;
