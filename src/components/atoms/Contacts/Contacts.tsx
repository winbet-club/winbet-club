import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

import { textConstants, addressTransformator, colors } from 'context';

const { address, workTime, phones } = textConstants;

interface IProps {
  activeCasino: string;
}

export const Contacts = (
  { activeCasino }: IProps
) => (
  <Wrapper>
    <ContextBlock>
      <Header><Translate id='contacts'/></Header>
      <Address>
        <HeaderSpan><Translate id={address}/></HeaderSpan>
        <Span><Translate id={addressTransformator[activeCasino].address}/></Span>
      </Address>
      <WorkTime>
        <HeaderSpan><Translate id={workTime}/></HeaderSpan>
        <Span><Translate id={addressTransformator[activeCasino].workDays}/></Span>
        <Span><Translate id={addressTransformator[activeCasino].workTime}/></Span>
      </WorkTime>
      <Phones>
        <HeaderSpan><Translate id={phones}/></HeaderSpan>
        <PhoneNumber
          href={`tel:${addressTransformator[activeCasino].phones}`}>
          {addressTransformator[activeCasino].phones}
        </PhoneNumber>
      </Phones>
    </ContextBlock>

  </Wrapper>
);

const Wrapper = styled.div`
  background: ${colors.gray3};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  @media (max-width: 994px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.div`
  font-size: 30px;
  margin-right: 50px;
  @media (max-width: 994px) {
    margin: 0 auto 15px;
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${colors.white};
  margin-right: 50px;
  padding-left: 20px;
  @media (max-width: 994px) {
    width: 100%;
    border-left: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
`;

const Phones = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${colors.white};
  margin-right: 50px;
  padding-left: 20px;
  @media (max-width: 994px) {
    width: 100%;
    border-left: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
`;

const WorkTime = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${colors.white};
  padding-left: 20px;
  margin-right: 50px;
  @media (max-width: 994px) {
    width: 100%;
    border-left: none;
    margin: 15px 0 0 ;
    padding: 0;
    align-items: center;
  }
`;

const PhoneNumber = styled.a`
  text-decoration: none;
  color: ${colors.white};
`;

const Span = styled.span``;

const HeaderSpan = styled.span`
  margin-bottom: 15px;
`;

const ContextBlock = styled.div`
  display: flex;
  @media (max-width: 994px) {
    width: 300px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;
