import { storiesOf } from '@storybook/react';
import React from 'react';

import { HeaderWatch } from 'atoms';

storiesOf('Atoms', module)
.add('HeaderWatch', () => (
  <HeaderWatch 
    hours='12'
    minutes='00'
    seconds='00'
  />
))
