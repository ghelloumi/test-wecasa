import { useDispatch } from 'react-redux';
import { setThemeAction } from '../../redux/main/mainActions';
import { selectTheme } from '../../redux/main/mainSelectors';
import Button from '../Atoms/Button';

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
  return <Button handleClick={handleChangeTheme}>Change Theme</Button>;
};

ThemeChanger.propTypes = {};

export default ThemeChanger;
