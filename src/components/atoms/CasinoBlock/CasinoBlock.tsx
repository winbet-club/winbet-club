import React from 'react';
import styled from 'styled-components';
import { colors } from 'context';

export interface ICasinoBlock {
  image: HTMLImageElement;
  description: string;
  url: string;
  casinoClick: (value: string) => any;
}

export const CasinoBlock = (
  { image, description, url, casinoClick }: ICasinoBlock
) => {
  const bindClick = () => casinoClick(url);

  return (
    <Wrapper image={image} onClick={bindClick}>
      <Description>
        {description}
      </Description>
    </Wrapper>
  )
};

const Description = styled.div`
  position: absolute;
  bottom: -72px;
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
  width: 25%;
  height: 200px;
  background: ${({image}) => `url(${image}) no-repeat`};
  background-size: cover;
  width: 290px;
  height: 270px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.silverBlue};
  &:hover ${Description}{
    transition: bottom .5s;
    bottom: 0px;
  }
`;
 