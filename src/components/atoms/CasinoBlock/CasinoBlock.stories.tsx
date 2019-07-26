import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { casinosAddressWithImg } from 'context';
import { CasinoBlock } from 'atoms';

const { img, address } = casinosAddressWithImg[1];

storiesOf('Atoms', module)
.add('CasinoBlock', () => (
  <CasinoBlock image={img} description={address} url='url' casinoClick={action('onClick')}/>
))
