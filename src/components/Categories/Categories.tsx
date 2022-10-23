import { FC } from 'react';
import CategoryItem from './CategoryItem';

import './categories.scss';

const Categories: FC = () => {
  return (
    <section className='categories'>
      <CategoryItem />
    </section>
  );
};

export default Categories;
