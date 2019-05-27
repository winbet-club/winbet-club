import React from 'react';
import styled from 'styled-components';
import { YMaps, Map } from 'react-yandex-maps';


import { CasinoAddress } from 'atoms';
import { colors } from 'context';


export const ContactsContent = (
  { casinosInfo }
) => (
<Wrapper>
  <YMaps>
    <Map defaultState={{ center: [53.902496, 27.561481], zoom: 11 }} width='100%' height='400px' />
  </YMaps>
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
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.bgSilver};
`;

const YandexMap = styled(Map)`
  width: 1200px;
`;
