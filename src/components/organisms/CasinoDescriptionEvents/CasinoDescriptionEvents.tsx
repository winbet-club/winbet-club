import React from 'react';
import styled from 'styled-components';

import { ICasinosListNav } from 'reducers';
import { CasinoDescriptionCommonPart } from 'organisms';
import { NotesList } from 'molecules';
import { textConstants } from 'context';

const { promo } = textConstants;

interface IProps {
  jackpotsValues: any;
  promoList: any; // TODO check
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  isMobileMenuDescriptionCasinoOpen: boolean;
  onClick: (value: string) => void;
  onDescripionMenuClick: () => void;
}
  
export const CasinoDescriptionEvents = (
  { jackpotsValues, promoList, casinosListNav, activeCasino,
    isMobileMenuDescriptionCasinoOpen, onClick, onDescripionMenuClick }: IProps
) => (
    <CasinoDescriptionCommonPart
      jackpotsValues={jackpotsValues}
      casinosListNav={casinosListNav}
      activeCasino={activeCasino}
      onClick={onClick}
      onDescripionMenuClick={onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
    >
      <Wrapper>
        <NotesList headerName={promo} promoList={promoList}/>
      </Wrapper>
    </CasinoDescriptionCommonPart>
);

const Wrapper = styled.div`
  padding: 40px 40px;
  width: 48%;
`;