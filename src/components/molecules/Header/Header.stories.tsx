import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { Header } from 'molecules';
import { headerNavList } from 'context';

storiesOf('Molecules', module)
.add('Header', () => (
  <Header
    hours='12'
    minutes='00'
    seconds='00'
    navList={headerNavList}
    onNavClick={action('onClick')}
  />
))