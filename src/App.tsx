import * as React from 'react';
import { LocalizeProvider } from "react-localize-redux";
import { renderToStaticMarkup } from 'react-dom/server';

import './App.css';
import { ViewPage } from './views';
import { globalTranslations } from './context';

class App extends React.Component {
  public initialize : any;

  private languages = [
    { name: 'Русский', code: 'ru' },
    { name: 'English', code: 'en' },
  ];

  constructor(props:any) {
    super(props);
    this.initialize = {
      languages: this.languages,
      translation: globalTranslations,
      options: {
        renderToStaticMarkup,
        onMissingTranslation: () => `Text not translated`,
        ignoreTranslateChildren: true
      }
    };
  }

  public render() {
    return (
      <LocalizeProvider>
        <ViewPage/>
      </LocalizeProvider>
    );
  }
}

export default App;
