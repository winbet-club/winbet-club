import React from "react";
import styled from "styled-components";
import { Translate } from "react-localize-redux";

import { DescriptionBlock, Slider } from "molecules";
import { textConstants, colors } from "context";
import { aboutBg, sliderBg } from "images";

const { aboutUsText, aboutUs } = textConstants;

export const AboutUsContent = () => (
  <Wrapper>
    <SliderWrapper />
    <Slider />
    <DescriptionBlock img={aboutBg}>
      <H2>
        <Translate id={aboutUs} />
      </H2>
      <Text>
        <Translate id={aboutUsText} />
      </Text>
    </DescriptionBlock>
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
  padding: 80px 0 30px;
  color: ${colors.lightGold};
  font-weight: 600;
  font-size: 40px;
`;

const Text = styled.p`
  text-indent: 20px;
  line-height: 25px;
  white-space: pre-wrap;
`;
