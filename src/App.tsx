import * as React from 'react';
import './App.css';

import { ViewPage } from './views';

class App extends React.Component {
  public render() {
    return (
      // @ts-ignore
      <ViewPage/>
    );
  }
}

export default App;
