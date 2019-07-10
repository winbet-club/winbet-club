import React from 'react';
// import styled from 'styled-components';

import { ICasinosListNav } from 'reducers';
import { CasinoDescriptionCommonPart } from 'organisms';
import { Promo } from 'molecules';

interface IProps {
  jackpotsValues: any;
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  onClick: (value: string) => void;
}
  
export const CasinoDescriptionPromo = (
  { jackpotsValues, casinosListNav, activeCasino, onClick }: IProps
) => (
    <CasinoDescriptionCommonPart 
      jackpotsValues={jackpotsValues}
      casinosListNav={casinosListNav}
      activeCasino={activeCasino}
      onClick={onClick}
    >
      <Promo/>
    </CasinoDescriptionCommonPart>
);
