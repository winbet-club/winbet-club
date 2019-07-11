import React from 'react';
// import styled from 'styled-components';

import { ICasinosListNav } from 'reducers';
import { CasinoDescriptionCommonPart } from 'organisms';
import { Promo } from 'molecules';

interface IProps {
  jackpotsValues: any;
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  isMobileMenuDescriptionCasinoOpen: boolean;
  onClick: (value: string) => void;
  onDescripionMenuClick: () => void;
}
  
export const CasinoDescriptionPromo = (
  { casinosListNav, activeCasino, onClick, onDescripionMenuClick, isMobileMenuDescriptionCasinoOpen }: IProps
) => (
    <CasinoDescriptionCommonPart
      casinosListNav={casinosListNav}
      activeCasino={activeCasino}
      onClick={onClick}
      onDescripionMenuClick={onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
    >
      <Promo/>
    </CasinoDescriptionCommonPart>
);
