import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPrestationsServiceAction } from './redux/main/mainActions';
import { selectPrestations } from './redux/main/mainSelectors';

const App = () => {
  const dispatch = useDispatch();
  const { prestations, error, loading } = selectPrestations();

  useEffect(() => {
    if (!prestations) {
      dispatch(getPrestationsServiceAction());
    }
  }, [prestations]);

  return <div className="App">My App</div>;
};

export default App;
