import { storiesOf } from '@storybook/react';
import React from 'react';

import { CardJeckpot } from 'atoms';
import { hearts } from 'images';

storiesOf('Atoms', module)
.add('CardJeckpot', () => (
  <CardJeckpot jackpotValue={12505} image={hearts} />
))

