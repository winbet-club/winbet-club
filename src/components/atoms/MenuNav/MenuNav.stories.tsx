import { storiesOf } from '@storybook/react';
import React from 'react';

import { MenuNav } from 'atoms';
import { menuItemsList } from 'context';

storiesOf('Atoms', module)
.add('MenuNav', () => (
  <MenuNav
    menuNavItemsList={menuItemsList}
  />
))
