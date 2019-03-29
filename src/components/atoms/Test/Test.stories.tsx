import { storiesOf } from '@storybook/react';
import React from 'react';

import { TestComponent } from 'atoms';

storiesOf('Atoms', module)
.add('TestComponent', () => (
  <TestComponent/>
))

