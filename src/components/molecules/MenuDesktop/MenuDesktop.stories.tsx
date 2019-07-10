import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { MenuDesktop } from 'molecules';
import { menuItemsList } from 'context';

storiesOf('Molecules', module)
.add('MenuDesktop', () => (
  <MenuDesktop
    isMobileMenuOpen={true}
    menuNavItemsList={menuItemsList}
    onMenuClick={action('onClick')}
    onMobileMenuClick={action('onClick')}
    onMainLogoClick={action('onClick')}
  />
))