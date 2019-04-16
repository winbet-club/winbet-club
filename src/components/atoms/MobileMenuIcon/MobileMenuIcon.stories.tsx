import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { MobileMenuIcon } from 'atoms';

storiesOf('Atoms', module)
.add('MobileMenu', () => (
  <MobileMenuIcon
    onMobileMenuClick={action('onClick')}
  />
))
