import React from 'react';
import styled from 'styled-components';

import { CommonWrapper } from 'organisms';
import { IStore } from 'reducers';
import { DescriptionBlock, Slider } from 'molecules';
import { textConstants, colors } from 'context';
import { corrieraBg } from 'images';

const { corrierHeader, corrierText } = textConstants;

interface IProps extends IStore {
  changeHeaderNav: (value: string) => void;
}

export class CorrierePage extends React.Component<IProps> {
  public onNavClick =(value: string) => {
    const { changeHeaderNav } = this.props;
    
    changeHeaderNav(value);
  }

  public render() {
    const { navList } = this.props;

    return (
      <Wrapper>
        <CommonWrapper onNavClick={this.onNavClick} navList={navList}>
        <Slider/>
        <DescriptionBlock img={corrieraBg}>
          <H2>{corrierHeader}</H2>
          <Text>{corrierText}</Text>
        </DescriptionBlock>
      </CommonWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
`;

const H2 = styled.h2`
  padding: 80px 0 30px;
  color: ${colors.lightGold};
  font-weight: 600;
  font-size: 40px;
`;

const Text = styled.p`

`;
