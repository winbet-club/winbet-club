import { storiesOf } from '@storybook/react';
import React from 'react';

import { DescriptionBlock } from 'molecules';
import { careeraBg } from 'images';

storiesOf('Molecules', module)
.add('DescriptionBlock', () => (
  <DescriptionBlock img={careeraBg} >Any contextAny contextAny contextAny 
  contextAny contextAny contextAny contextAny contextAny context</DescriptionBlock>
))
