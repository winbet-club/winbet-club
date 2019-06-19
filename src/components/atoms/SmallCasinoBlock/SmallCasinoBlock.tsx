import React from 'react';
import styled from 'styled-components';
import { colors } from 'context';

export interface ICasinoBlock {
  image: HTMLImageElement;
  description: string;
}

export const SmallCasinoBlock = (
  { image, description }: ICasinoBlock
) => (
  <Wrapper image={image}>
    <Description>
      {description}
    </Description>
  </Wrapper>
);

const Description = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 55px;
  background: ${colors.lightGold};
  padding: 15px 0 0 15px;
  box-sizing: border-box;
  transition: bottom .5s;
  &::after {
    content: '';
    border: 17px solid transparent;
    border-bottom: 17px solid ${colors.lightGold};
    position: absolute;
    top: -34px;
    left: 20px;
  };
`;

const Wrapper = styled.div<{image: HTMLImageElement}>`
  background: ${({image}) => `url(${image}) no-repeat`};
  background-size: cover;
  width: 230px;
  height: 210px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.silverBlue};
  color: ${colors.black};
  &:hover ${Description}{
    transition: bottom .5s;
    height: 75px;
    background: ${colors.tomato};
    &::after{
      border-bottom: 17px solid ${colors.tomato};
    }
  }
`;
 