import { storiesOf } from '@storybook/react';
import React from 'react';

import { Game } from 'atoms';

storiesOf('Atoms', module)
.add('Game', () => (
<Game  
  name='BlackJack'
  description='BlackJack BlackJack BlackJack BlackJack'
  nameColor='#f98b09'
/>
))
 