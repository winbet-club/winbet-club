import { storiesOf } from '@storybook/react';
import React from 'react';

import { MobileMenu } from 'atoms';
import { menuItemsList } from 'context';

storiesOf('Atoms', module)
.add('MobileMenu', () => (
  <MobileMenu
    itemsList={menuItemsList}
  />
))

