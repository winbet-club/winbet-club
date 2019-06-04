import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

export const HeaderWatch = (
  { time }: { time: string }
) => {
  const [ hours, minutes, seconds ] = time.split(':');
  return (
    <Wrapper>
      <Span>{hours}:</Span>
      <Span>{minutes}:</Span>
      <Span>{seconds}</Span>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 14px;
  color: ${colors.white};
`;
 