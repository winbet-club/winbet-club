import React from 'react';
import styled from 'styled-components';

import { textConstants, colors } from 'context';

const { address, workTime } = textConstants;

export interface ICasinoAddress {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  color: ${colors.white};
  font-size: 15px;
`;

const Name = styled.h2`
  font-size: 31px;
  margin-bottom: 15px;
`;

const Address = styled.h3`
  margin-bottom: 15px;
`;

const WorkTime = styled.h3`
  margin-bottom: 15px;
`;

const Description = styled.p`
  margin-bottom: 15px;
`;
