import { storiesOf } from '@storybook/react';
import React from 'react';

import { DescriptionBlock } from 'molecules';
import { corrieraBg } from 'images';

storiesOf('Molecules', module)
.add('DescriptionBlock', () => (
  <DescriptionBlock img={corrieraBg} >Any contextAny contextAny contextAny 
  contextAny contextAny contextAny contextAny contextAny context</DescriptionBlock>
))
