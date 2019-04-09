import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { MenuNav } from 'atoms';
import { menuItemsList } from 'context';

storiesOf('Atoms', module)
.add('MenuNav', () => (
  <MenuNav
    menuNavItemsList={menuItemsList}
    onMenuClick={action('onClick')}
  />
))
