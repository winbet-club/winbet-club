import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CasinoDescriptionNav, Contacts, SmallCasinoBlock,
  PageDescription } from 'atoms';
import { JackpotCardsList } from 'molecules';
import { ICasinosListNav } from 'reducers';
import { colors, textConstants, addressTransformator, casinosAddressWithImg } from 'context';

const { winbetMinsk } = textConstants;

interface IProps {
  children: any;
  casinosListNav: ICasinosListNav[];
  activeCasino: string;
  jackpotsValues?: any[];
  isMobileMenuDescriptionCasinoOpen: boolean;
  onClick: (value: string) => void;
  casinoClick: (value: string) => void;
  onDescripionMenuClick: () => void;
}
  
export const CasinoDescriptionCommonPart = (
  { children, casinosListNav, activeCasino, jackpotsValues, 
    onDescripionMenuClick, isMobileMenuDescriptionCasinoOpen, onClick, casinoClick }: IProps
) => (
    <Wrapper>
      <JackpotCardsListWrapper>
        <JackpotCardsList cardJackpotData={jackpotsValues} />
      </JackpotCardsListWrapper>

      <CasinosList>
        {
          casinosAddressWithImg.map(({img, address, url}) =>
            <Link
              key={address}
              to={url.split('/')[1]}
            >
              <SmallCasinoBlock
                description={address}
                image={img}
                casinoClick={casinoClick}
                activeCasino={url.split('/')[1]}
              />
            </Link>)
        }
      </CasinosList>
      <PageDescription text={winbetMinsk} address={addressTransformator[activeCasino].address} />

      <CasinoDescriptionNav
        navList={casinosListNav}
        onClick={onClick}
        activeCasino={activeCasino}
        onDescripionMenuClick={onDescripionMenuClick}
        isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
      />

        {children}

      <Contacts activeCasino={activeCasino} />
    </Wrapper>
  );

const Wrapper = styled.div`
  background: ${colors.silver1};
  color: ${colors.white};
`;

const JackpotCardsListWrapper = styled.div`
  background: ${colors.background1};
`;

const CasinosList = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.gray2};
  padding: 15px 0;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, rgba(0, 0, 0, 0), #d9761b, rgba(0, 0, 0, 0)) 100% 0;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;
