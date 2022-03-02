const sizes = {
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 64
};

const commonPalette = {
  disabled: 'silver',
  border: '#e0e0e0'
};

const palette = {
  light: {
    ...commonPalette,
    primary: '#00B2FF',
    secondary: '#555555',
    info: '#2EB67D',
    warning: '#ECB22E',
    danger: '#E01E5A'
  },
  dark: {
    ...commonPalette,
    primary: '#555555',
    secondary: '#00B2FF',
    info: '#2EB67D',
    warning: '#ECB22E',
    danger: '#E01E5A'
  }
};

export const palettePropTypes = ['disabled', 'primary', 'secondary', 'info', 'warning', 'danger'];
export const defaultColor = 'primary';

export default (theme) => ({
  name: theme,
  palette: palette[theme],
  sizes
});
