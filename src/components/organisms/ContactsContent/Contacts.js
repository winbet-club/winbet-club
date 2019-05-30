import React from "react";
import styled from "styled-components";
import { YMaps, Map, GeoObject } from "react-yandex-maps";

import { CasinoAddress } from "atoms";
import { colors } from "context";

const mapState = {
  center: [53.902496, 27.561481],
  zoom: 11,
};

export const ContactsContent = ({ casinosInfo }) => (
  <Wrapper>
  <YMaps>
    <Map defaultState={mapState} width='100%'>
      <GeoObject
        geometry={{
          coordinates: mapState.center,
          type: 'Point',
          
        }}
      />
      <GeoObject
        geometry={{
          coordinates: [mapState.center, [53.941675, 27.684289]],
          type: 'LineString',
          
        }}
        options={{
          geodesic: true,
          strokeColor: '#F008',
          strokeWidth: 5,
          
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
