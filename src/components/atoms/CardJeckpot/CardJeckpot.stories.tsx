import { storiesOf } from '@storybook/react';
import React from 'react';

import { CardJeckpot } from 'atoms';
import { jackpotcardsSymbol_1 } from 'images';

storiesOf('Atoms', module)
.add('CardJeckpot', () => (
  <CardJeckpot jackpotValue={12505} image={jackpotcardsSymbol_1} />
))

