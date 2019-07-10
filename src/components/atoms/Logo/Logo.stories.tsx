import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { Logo } from 'atoms';

storiesOf('Atoms', module)
.add('Logo', () => (
  <Logo onMainLogoClick={action('onClick')}/>
))
