import React from 'react';

import { ICasinosListNav } from 'reducers';
import { CasinoDescriptionCommonPart } from 'organisms';
import { NotesList } from 'molecules';
import { textConstants } from 'context';

const { promo } = textConstants;

interface IProps {
  promoList: any; // TODO check
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  onClick: (value: string) => void;
}
  
export const CasinoDescriptionEvents = (
  { promoList, casinosListNav, activeCasino, onClick }: IProps
) => (
    <CasinoDescriptionCommonPart casinosListNav={casinosListNav} activeCasino={activeCasino} onClick={onClick}>
      <NotesList headerName={promo} promoList={promoList}/>
    </CasinoDescriptionCommonPart>
);
