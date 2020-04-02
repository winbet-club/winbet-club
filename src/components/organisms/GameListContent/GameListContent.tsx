import React from "react";
import styled from "styled-components";
import { Translate } from "react-localize-redux";

import { Slider } from "molecules";
import { textConstants, colors, gamesList, gamesNameColors } from "context";
import { Game } from "atoms";
import { sliderBg } from "images";

const { winbetGames, gamesDescription, gamesAttention } = textConstants;

export const GameListContent = () => (
  <Wrapper>
    <SliderWrapper />
    <Slider />
    <Description>
      <H2>{winbetGames.toUpperCase()}</H2>
      <Text>{gamesDescription}</Text>
    </Description>
    <GamesListWrapper>
      {gamesList.map(({ name, description }, i) => (
        <Game
          key={name}
          name={name}
          description={description}
          nameColor={gamesNameColors[i]}
        />
      ))}
    </GamesListWrapper>
    <GameAttention>
      <Translate id={gamesAttention} />
    </GameAttention>
  </Wrapper>
);
const Wrapper = styled.div``;

const SliderWrapper = styled.div`
  width: 100%;
  height: 220px;
  background: url(${sliderBg}) no-repeat;
  background-size: cover;
  filter: blur(1px);
  position: absolute;
  z-index: 0;

  @media screen and (min-width: 560px) {
    height: 400px;
  }
  @media screen and (min-width: 980px) {
    height: 480px;
  }
`;

const H2 = styled.h2`
  padding: 30px 0 30px;
  color: ${colors.lightGold};
  font-weight: 600;
  font-size: 40px;
  font-size: 50px;
  @media screen and (max-width: 560px) {
    font-size: 32px;
  }
`;

const Text = styled.p`
  margin-bottom: 10px;
  color: ${colors.white};
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  background: ${colors.silver1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GamesListWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: inset 0 20px 25px rgba(0, 0, 0, 0.4);
`;

const GameAttention = styled.div`
  background: ${colors.lightGold};
  padding: 40px;
  text-align: center;
  color: ${colors.color2};
  font-family: "Philosopher", sans-serif;
`;
