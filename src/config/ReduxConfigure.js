import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

const ReduxConfigure = ({ children }) => {
  const store = configureStore();
  return <Provider store={store}>{children}</Provider>;
};

ReduxConfigure.propTypes = {
  children: PropTypes.node.isRequired
};

export default ReduxConfigure;
