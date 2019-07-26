import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

import { textConstants, colors } from 'context';

const { address, workTime, phones } = textConstants;

export interface ICasinoAddress {
  casinoName: string;
  casinoAddress: string;
  workDays: string;
  casinoWorkTime: string;
  phone: string;
}

export const CasinoAddress = (
  { casinoName, casinoAddress, workDays, casinoWorkTime, phone }: ICasinoAddress
) => (
  <Wrapper>
    <Name>{casinoName}</Name>

    <Header><Translate id={address}/>:</Header>
    <Description><Translate id={casinoAddress}/></Description>

    <Header><Translate id={workTime}/>:</Header>
    <Description>{workDays}</Description>
    <Description>{casinoWorkTime}</Description>
    <Header><Translate id={phones}/></Header>
    <PhoneNumber href={`tel:${phone}`}>{phone}</PhoneNumber>
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

const Header = styled.h3`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 20px;  
`;

const Description = styled.p`
  margin-bottom: 15px;
`;

const PhoneNumber = styled.a`
  margin-bottom: 15px;
  text-decoration: none;
  color: ${colors.white};
`;
