import React from 'react';
import styled from 'styled-components';

import { Slider } from 'molecules';
import { textConstants, colors, gamesList, gamesNameColors } from 'context';
import { Game } from 'atoms';

const { winbetGames, gamesDescription, gamesAttention } = textConstants;

export const GameListContent = () => (
  <Wrapper>
    <Slider/>
    <Description>
      <H2>{winbetGames.toUpperCase()}</H2>
      <Text>{gamesDescription}</Text>
    </Description>
    <GamesListWrapper>
      {
        gamesList.map(({name, description}, i) =>
          <Game key={name} name={name} description={description} nameColor={gamesNameColors[i]}/>)
      }
    </GamesListWrapper>
    <GameAttention>{gamesAttention}</GameAttention>
  </Wrapper>
)
const Wrapper = styled.div`
`;

const H2 = styled.h2`
  padding: 30px 0 30px;
  color: ${colors.lightGold};
  font-weight: 600;
  font-size: 40px;
  font-size: 50px;
`;

const Text = styled.p`
  margin-bottom: 10px;
  color: ${colors.white};
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
`;

const GameAttention = styled.div`
  background: ${colors.lightGold};
  padding: 40px;
`;
