import ReactDOM from 'react-dom';
import AppConfigure from './config/AppConfigure';
import Home from './UI/Pages/Home';

const renderApp = () => {
  ReactDOM.render(
    <AppConfigure>
      <Home />
    </AppConfigure>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./UI/Pages/Home', renderApp);
}

renderApp();
