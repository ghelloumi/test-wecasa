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
  theme1: {
    ...commonPalette,
    primary: '#FAFAFA',
    secondary: '#E4E4E4',
    info: '#2EB67D',
    warning: '#ECB22E',
    danger: '#E01E5A'
  },
  theme2: {
    ...commonPalette,
    primary: '#eeeeee',
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
