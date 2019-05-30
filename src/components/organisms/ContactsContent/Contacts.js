import React from "react";
import styled from "styled-components";
import { YMaps, Map, GeoObject } from "react-yandex-maps";

import { CasinoAddress } from "atoms";
import { colors } from "context";

const mapState = {
  
  center: [53.902496, 27.561481],
  coordinates: [[53.941675, 27.684289], [53.910256, 27.579699]],
  zoom: 11,
};

export const ContactsContent = ({ casinosInfo }) => (
  <Wrapper>
  <YMaps>
    <Map defaultState={mapState} width='100%' height='500px'>
      <GeoObject
        geometry={{
          coordinates: mapState.coordinates[0],
          type: 'Point', 
        }}
        properties={{
          
          balloonContent: 'balloonContent',
          balloonContentHeader: 'balloonContentHeader',
          hintContent: 'hintContent',
          iconCaption: 'Описание',
          iconContent: 'Казино',
          
          
        }}
      />
      <GeoObject
        geometry={{
          coordinates: mapState.coordinates[1],
          type: 'Point',
        }}
      />
    </Map>
  </YMaps> 
  {/* ObjectManager */}
    {casinosInfo.map(
      ({ casinoAddress, casinoName, casinoWorkTime, workDays }) => (
        <CasinoAddress
          key={casinoAddress}
          casinoAddress={casinoAddress}
          casinoName={casinoName}
          casinoWorkTime={casinoWorkTime}
          workDays={workDays}
        />
      )
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.bgSilver};
`;

const YandexMap = styled(Map)`
  width: 1200px;
`;
