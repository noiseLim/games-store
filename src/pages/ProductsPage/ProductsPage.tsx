import { FC, useState, useEffect, memo, Fragment } from 'react';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router';
import CardGame from '../../components/Games/CardGame';
import { BASE_URL } from '../../constants/baseUrl';
import { playstation, xbox, pc } from '../../constants/category';
import { useHttp, TApiResponse } from '../../hooks/http.hook';
import { ICard } from '../../types/Card';

import './productPage.scss';

const ProductsPage: FC = () => {
  const [category, setCategory] = useState<ICard[]>([]);
  const { platforms } = useParams<'platforms'>();

  const getCategories = () => {
    const category = [playstation, xbox, pc];

    return category.find((item) => item === platforms);
  };

  const { data, loading }: TApiResponse = useHttp(
    `${BASE_URL}/products?platform.${getCategories()}=true`
  );

  useEffect(() => {
    if (data) {
      setCategory(data as ICard[]);
    }
  }, [platforms, data]);

  return (
    <div className='product-page main cards'>
      {loading ? (
        <CircularProgress className='cards__spinner' color='secondary' />
      ) : (
        category.map((item) => (
          <Fragment key={item.id}>
            <CardGame {...item} />
          </Fragment>
        ))
      )}
    </div>
  );
};

export default memo(ProductsPage);
