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

import { CasinoAddress } from "atoms";
import { colors, geoObjectSetings, mapState } from "context";

export const YaMap = () => (
  <Wrapper>
    <YMaps>
      <Map defaultState={mapState} width="100%" height="500px">
        {geoObjectSetings.map((object, i) => {
          // const onClick = () => console.log(object.id);

          return <GeoObject {...object} key={i} />;
        })}
        <ZoomControl options={{ float: "right" }} />
        <FullscreenControl />
      </Map>
    </YMaps>
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
