import * as React from 'react';
<<<<<<< HEAD
import { LocalizeProvider } from "react-localize-redux";
import { renderToStaticMarkup } from 'react-dom/server';

=======
import { HashRouter } from 'react-router-dom';
>>>>>>> Added a size to slider

import './App.css';
import { ViewPage } from './views';
import { globalTranslations } from './context';
import { store } from './index';


class App extends React.Component {
  public initialize: any;

  private languages = [
    { name: 'Русский', code: 'ru' },
    { name: 'English', code: 'en' },
  ];

  constructor(props: any) {
    super(props);
    this.initialize = {
      languages: this.languages,
      translation: globalTranslations,
      options: {
        renderToStaticMarkup,
        defaultLanguage: 'ru',
        onMissingTranslation: () => `Text not translated`,
        ignoreTranslateChildren: true
      }
    };
  }

  public render() {

    return (
<<<<<<< HEAD
      <LocalizeProvider initialize={this.initialize} store={store}>
        <ViewPage/>
      </LocalizeProvider>
=======
      <HashRouter>
        <ViewPage/>
      </HashRouter> 
>>>>>>> Added a size to slider
    );
  }
}

export default App;
