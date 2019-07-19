import { storiesOf } from '@storybook/react';
import React from 'react';

import { CasinoAddress } from 'atoms';

storiesOf('Atoms', module)
.add('CasinoAddress', () => (
  <CasinoAddress
    casinoName='SomeName'
    casinoAddress='София, бул. Черни връх 100'
    workDays='понеделник - неделя'
    casinoWorkTime='от 00:00 до 00:00 часа'
    phone='+375292222222'
  />
))
