import { storiesOf } from '@storybook/react';
import React from 'react';

import { HeaderNav } from 'atoms';
import { headerNavList } from 'context';

storiesOf('Atoms', module)
.add('HeaderNav', () => (
  <HeaderNav navList={headerNavList} />
))

