import { StrictMode } from 'react';
import PropTypes from 'prop-types';
import MessageBoxConfig from './MessageBoxConfig';
import ReduxConfigure from './ReduxConfigure';
import ThemeConfigure from './ThemeConfigure';

const AppConfigure = ({ children }) => (
  <StrictMode>
    <ReduxConfigure>
      <ThemeConfigure>
        <MessageBoxConfig>{children}</MessageBoxConfig>
      </ThemeConfigure>
    </ReduxConfigure>
  </StrictMode>
);

AppConfigure.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppConfigure;
