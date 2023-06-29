import React from "react";
import styled from "styled-components";
import { Translate } from "react-localize-redux";

import { colors } from "context";

interface IProps {
  imgUrl: string;
  header: string;
  date: string;
  text: string;
}

export const NewsBlock = ({ imgUrl, header, date, text }: IProps) => (
  <Wrapper>
    <Image image={imgUrl} />
    <Info>
      <Header>
        <Translate id={header} />
      </Header>
      <NewsDate>
        <Translate id={date} />
      </NewsDate>
      <Text>
        <Translate id={text} />
      </Text>
    </Info>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  padding: 30px 50px;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const Image = styled.div<{ image: string }>`
  width: 636px;
  height: 468px;
  background: ${({ image }) => `url(${image}) no-repeat`};
  background-size: contain;
  margin-top: 50px;
  @media screen and (max-width: 980px) {
//    width: 400px;
//    height: 300px;
//    margin: 0 auto 30px;
    width: 400px;
    height: 300px;
    margin: 0 auto 30px;
  }
  @media screen and (max-width: 520px) {
    width: 270px;
    height: 190px;
    margin: 0 auto 30px;
  }
`;

const Info = styled.div`
  width: 800px;
  margin-left: 30px;
  @media screen and (max-width: 980px) {
    width: 100%;
    margin: auto;
  }
`;

const Header = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 300;
  color: ${colors.lightGold};
  margin-bottom: 25px;
  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;
const NewsDate = styled.h2`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
  font-style: italic;
  color: ${colors.white};
  margin-bottom: 25px;
`;
const Text = styled.p`
  font-size: 21px;
  white-space: pre-wrap;
  color: ${colors.white};
`;
