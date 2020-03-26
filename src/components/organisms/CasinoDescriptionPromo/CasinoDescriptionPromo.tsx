import React from 'react';

import { ICasinosListNav } from 'reducers';
import { CasinoDescriptionCommonPart } from 'organisms';
import { Promo } from 'molecules';

interface IProps {
  jackpotsValues: any;
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  isMobileMenuDescriptionCasinoOpen: boolean;
  onClick: (value: string) => void;
  casinoClick: (value: string) => void;
  onDescripionMenuClick: () => void;
}
  
export const CasinoDescriptionPromo = (
  { 
    casinosListNav, 
    activeCasino, 
    onClick, 
    onDescripionMenuClick, 
    isMobileMenuDescriptionCasinoOpen,
    casinoClick,
  }: IProps
) => (
    <CasinoDescriptionCommonPart
      casinosListNav={casinosListNav}
      activeCasino={activeCasino}
      onClick={onClick}
      onDescripionMenuClick={onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
      casinoClick={casinoClick}
    >
      <Promo/>
    </CasinoDescriptionCommonPart>
);
