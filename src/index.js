import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/configureStore';
import ThemeConfigure from './config/ThemeConfigure';

const renderApp = () => {
  const store = configureStore();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeConfigure>
          <App />
        </ThemeConfigure>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
