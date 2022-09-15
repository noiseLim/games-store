import { useRoutes } from 'react-router-dom';
import routes from '../../constants/routes';

import './app.scss';

const App = () => {
  const element = useRoutes(routes);

  return <div className='app'>{element}</div>;
};

export default App;
