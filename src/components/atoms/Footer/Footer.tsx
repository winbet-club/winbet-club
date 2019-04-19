import React from 'react';
import styled from 'styled-components';

import { colors } from 'context';

interface IProps {
  text: string;
}

export const Footer = (
  { text }: IProps
) => (
<Wrapper>
  <Container>
    <Description>
      {text}
    </Description>
  </Container>
</Wrapper>
);

const Wrapper = styled.div`
  height: 95px;
  background: linear-gradient(0deg,#4b4d4e 1%, #313637 10%, #4b4d4e 90%);
  border-bottom: 15px solid ${colors.black};
  border-top: 1px solid ${colors.gold};
`;

const Container = styled.div`
  margin: auto;
  padding: 0 15px;
`;

const Description = styled.div`
  height: 95px;
  font-size: 13px;
  text-align: center;
  color: ${colors.silver};
  display: flex;
  justify-content: center;
  align-items: center;
`;



