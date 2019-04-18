import { storiesOf } from '@storybook/react';
import React from 'react';

import { CardJeckpot } from 'atoms';

storiesOf('Atoms', module)
.add('CardJeckpot', () => (
  <CardJeckpot jackpotValue={12505} />
))

