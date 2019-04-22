import { storiesOf } from '@storybook/react';
import React from 'react';

import { JackpotCardsList } from 'molecules';
import { cardJackpodDataMock } from 'context';

storiesOf('Molecules', module)
.add('JackpotCardsList', () => (
  <JackpotCardsList cardJackpotData={cardJackpodDataMock}/>
))
