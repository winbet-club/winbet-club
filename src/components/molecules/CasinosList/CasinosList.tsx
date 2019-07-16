import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CasinoBlock } from 'atoms';
import { casinosAddressWithImg } from 'context';
import { colors } from 'context';

export const CasinosList = ({casinoClick}: any) => (
<Wrapper>
  {
    casinosAddressWithImg.map(({img, address, url}: any) => 
      <Link to={url} key={address}>
        <CasinoBlock image={img} description={address} casinoClick={casinoClick} url={url.split('/')[1]} />
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
