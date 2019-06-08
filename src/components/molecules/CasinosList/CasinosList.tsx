import React from 'react';
import styled from 'styled-components';

import { CasinoBlock } from 'atoms';
import { casinosAddressWithImg } from 'context';

export const CasinosList = () => (
<Wrapper>
  {
    casinosAddressWithImg.map(({img, address}: any) => 
      <CasinoBlock image={img} description={address} key={address} />)
  }
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;
