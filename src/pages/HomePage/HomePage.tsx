import { FC } from 'react';
import Categories from '../../components/Categories';

import './homePage.scss';

interface HomePage {}

const HomePage: FC<HomePage> = () => {
  return (
    <div className='main'>
      <Categories />
    </div>
  );
};

export default HomePage;
