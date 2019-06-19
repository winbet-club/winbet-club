import React from 'react';
import styled from 'styled-components';

import { PromoNote, IPromoNote } from 'atoms';

interface IProps {
  promoList: IPromoNote[]; // TODO rename type
  headerName: string;
}

export const NotesList = (
  { headerName, promoList }: IProps
) => (
<Wrapper>
  <PromoHeader>{headerName.toUpperCase()}</PromoHeader>
  {
    promoList.map(({header, text}: IPromoNote) => 
      <PromoNote key={header} header={header} text={text} />)
  }
</Wrapper>
);

const Wrapper = styled.div`

`;

const PromoHeader = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;