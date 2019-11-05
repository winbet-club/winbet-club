import React from 'react';
import styled from 'styled-components';

import { PromoNote, IPromoNote } from 'atoms';

interface IProps {
  promoList: IPromoNote[]; // TODO rename type
  headerName: string;
  activeCasino: string;
}

export const NotesList = (
  { headerName, promoList, activeCasino }: IProps
) => (
<Wrapper>
  <PromoHeader>{headerName.toUpperCase()}</PromoHeader>
  {
    promoList[activeCasino].map(({header, text}: IPromoNote) => 
      <PromoNote key={header} header={header} text={text} />)
  }
</Wrapper>
);

const Wrapper = styled.div`

`;

const PromoHeader = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  border: 1px solid;
  border-image: linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
  -webkit-border-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0), #efe3bd, #efe3bd ) 0 0 100%;
`;