import React from "react";
import styled from "styled-components";
import {
  YMaps,
  Map,
  GeoObject,
  Placemark,
  ZoomControl,
  FullscreenControl
} from "react-yandex-maps";
import { Translate } from 'react-localize-redux';

import { CasinoAddress } from "atoms";
import { colors, geoObjectSetings, mapState, textConstants } from "context";

const socialList = [
  {
    link: 'https://vk.com/winbetby',
    name: 'Vkontakte'
  },
  {
    link: 'https://www.instagram.com/winbet_casino/',
    name: 'instagram'
  }
];

const { weAreInSocial } = textConstants;

export const ContactsContent = ({ casinosInfo }) => (
  <Wrapper>
    <Social>
      <Translate id={weAreInSocial}/>
      {
        socialList.map((item) => <SocialLink key={item.name} href={item.link} target="_blank">{item.name}</SocialLink>)
      }
    </Social>
    <YMaps>
      <Map defaultState={mapState} width="100%" height="500px">
        {geoObjectSetings.map((object, i) => (
          <GeoObject {...object} key={i} />
        ))}
        <ZoomControl options={{ float: "right" }} />
        <FullscreenControl />
      </Map>
    </YMaps>
    {casinosInfo.map(
      ({ casinoAddress, casinoName, casinoWorkTime, workDays, phone }) => (
        <CasinoAddress
          key={casinoAddress}
          casinoAddress={casinoAddress}
          casinoName={casinoName}
          casinoWorkTime={casinoWorkTime}
          workDays={workDays}
          phone={phone}
        />
      )
    )}
  </Wrapper>
);

const Social = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(to bottom,rgba(36,36,36,1) 0%,rgba(19,19,19,1) 100%);
  color: white;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  padding-right: 45px
`;

const SocialLink = styled.a`
  color: white;
  margin-left: 10px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: ${colors.lightGold};
  }
`;
 
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.bgSilver};
`;

const YandexMap = styled(Map)`
  width: 1200px;
`;