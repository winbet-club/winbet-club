import { storiesOf } from '@storybook/react';
import React from 'react';
import { casino_1 } from 'assets/images';

import { CasinoBlock } from 'atoms';

storiesOf('Atoms', module)
.add('CasinoBlock', () => (
  <CasinoBlock image={casino_1} description='description'/>
))
