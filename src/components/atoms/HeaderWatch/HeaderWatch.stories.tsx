import { storiesOf } from '@storybook/react';
import React from 'react';

import { HeaderWatch } from 'atoms';

storiesOf('Atoms', module)
.add('HeaderWatch', () => (
  <HeaderWatch 
    time='10:00:00'
  />
))
