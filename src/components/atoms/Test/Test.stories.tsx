import { storiesOf } from '@storybook/react';
import React from 'react';

import { TestComponent } from './Test';

storiesOf('Atoms', module)
.add('TestComponent', () => (
  <TestComponent/>
))

