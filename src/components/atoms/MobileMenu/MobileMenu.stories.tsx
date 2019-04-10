import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { MobileMenu } from 'atoms';

storiesOf('Atoms', module)
.add('MobileMenu', () => (
  <MobileMenu
    onMobileMenuClick={action('onClick')}
  />
))
