import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./App', renderApp);
}
renderApp();
