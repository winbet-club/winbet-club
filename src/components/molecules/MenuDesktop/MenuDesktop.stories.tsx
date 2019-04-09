import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { MenuDesktop } from 'molecules';
import { menuItemsList } from 'context';

storiesOf('Molecules', module)
.add('MenuDesktop', () => (
  <MenuDesktop
    menuNavItemsList={menuItemsList}
    onMenuClick={action('onClick')}
  />
))