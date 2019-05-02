import React from 'react';
import styled from 'styled-components';

import { IStore } from 'reducers';
import { CommonWrapper } from 'organisms';
import { Slider, Promo } from 'molecules';

interface IProps extends IStore {
  changeHeaderNav: (value: string) => void;
}

export class HomePage extends React.Component<IProps> {
  public onNavClick =(value: string) => {
    const { changeHeaderNav } = this.props;
    
    changeHeaderNav(value);
  }

  public render() {
    const { navList } = this.props;

    return (
      <Wrapper>
        <CommonWrapper navList={navList} onNavClick={this.onNavClick}>
          <Slider/>
          <Promo/>
        </CommonWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`;
