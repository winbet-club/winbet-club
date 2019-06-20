import React from 'react';
// import styled from 'styled-components';

import { ICasinosListNav } from 'reducers';
import { CasinoDescriptionCommonPart } from 'organisms';
import { Promo } from 'molecules';

interface IProps {
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  onClick: (value: string) => void;
}
  
export const CasinoDescriptionPromo = (
  { casinosListNav, activeCasino, onClick }: IProps
) => (
    <CasinoDescriptionCommonPart casinosListNav={casinosListNav} activeCasino={activeCasino} onClick={onClick}>
      <Promo/>
    </CasinoDescriptionCommonPart>
);
