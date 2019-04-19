import { storiesOf } from '@storybook/react';
import React from 'react';

import { Footer } from 'atoms';

storiesOf('Atoms', module)
.add('Footer', () => (
  <Footer text='Copyright 2019, Casino Solutions Ltd. All rights reserved.'/>
))

