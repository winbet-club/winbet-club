import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface IProps {
  hours: string;
  minutes: string;
  seconds: string;
}

export const HeaderWatch = (
  { hours, minutes, seconds }: IProps
) => (
<Wrapper>
  <Span>{hours}:</Span>
  <Span>{minutes}:</Span>
  <Span>{seconds}</Span>
</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 14px;
  color: ${colors.white};
`;
 