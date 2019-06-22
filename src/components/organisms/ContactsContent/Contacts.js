import React from "react";
import styled from "styled-components";
import { YMaps, Map, GeoObject, Placemark } from "react-yandex-maps";

import { CasinoAddress } from "atoms";
import { colors, geoObjectSetings, mapState } from "context";

export const ContactsContent = ({ casinosInfo }) => (
  <Wrapper>
  <YMaps>
    <Map defaultState={mapState} width='100%' height='500px'> 
      {
        geoObjectSetings.map((object, i) => {
          const onClick = () => console.log(object.id)

          return <GeoObject {...object} key={i} onClick={onClick} />
        })
      }

    </Map>
  </YMaps> 
    {
      casinosInfo.map(
      ({ casinoAddress, casinoName, casinoWorkTime, workDays }) => (
        <CasinoAddress
          key={casinoAddress}
          casinoAddress={casinoAddress}
          casinoName={casinoName}
          casinoWorkTime={casinoWorkTime}
          workDays={workDays}
        />
      )
    )
    }
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
