import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { selectTheme } from '../redux/main/mainSelectors';
import theme from './theme';

const ThemeConfigure = ({ children }) => {
  const myTheme = selectTheme();

  return <ThemeProvider theme={theme(myTheme)}>{children}</ThemeProvider>;
};

ThemeConfigure.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeConfigure;
