import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setThemeAction } from '../../redux/main/mainActions';
import { selectTheme } from '../../redux/main/mainSelectors';
import Button from '../Atoms/Button';

const Container = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes.s}px;
  right: ${({ theme }) => theme.sizes.s}px;
`;

const ThemeChanger = () => {
  const dispatch = useDispatch();
  const myTheme = selectTheme();

  const handleChangeTheme = () => {
    dispatch(
      setThemeAction(
        myTheme === process.env.REACT_APP_THEME_1
          ? process.env.REACT_APP_THEME_2
          : process.env.REACT_APP_THEME_1
      )
    );
  };
  return (
    <Container>
      <Button handleClick={handleChangeTheme}>Change Theme</Button>
    </Container>
  );
};

ThemeChanger.propTypes = {};

export default ThemeChanger;
