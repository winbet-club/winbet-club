import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { Header } from 'molecules';
import { headerNavList } from 'context';

storiesOf('Molecules', module)
.add('Header', () => (
  <Header
    time='10:00:00'
    navList={headerNavList}
    onNavClick={action('onClick')}
  />
))
