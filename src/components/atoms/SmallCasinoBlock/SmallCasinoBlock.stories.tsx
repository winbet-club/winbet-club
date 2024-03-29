import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { casinosAddressWithImg } from 'context';

import { SmallCasinoBlock } from 'atoms';

const { img, address } = casinosAddressWithImg[1];

storiesOf('Atoms', module)
.add('SmallCasinoBlock', () => (
  <SmallCasinoBlock
    image={img}
    description={address}
    activeCasino='activeCasino'
    casinoClick={action('click')}
  />
))
