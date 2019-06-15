import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CasinoBlock } from 'atoms';
import { casinosAddressWithImg } from 'context';
import { colors } from 'context';

export const CasinosList = () => (
<Wrapper>
  {
    casinosAddressWithImg.map(({img, address, url}: any) => 
      <Link to={url} key={address}>
        <CasinoBlock image={img} description={address} />
      </Link>
      )
  }
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.black};
`;
