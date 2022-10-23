import { FC, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import category from '../../../constants/category';

import './categoryItem.scss';

const CategoryItem: FC = () => (
  <Grid container spacing={1}>
    {category.map(({ icon, title, link }) => (
      <Fragment key={title}>
        <Grid item xs={4}>
          <Link to={link} className='category-item'>
            <FontAwesomeIcon icon={icon} />
            <Typography variant='subtitle1'>{title}</Typography>
          </Link>
        </Grid>
      </Fragment>
    ))}
  </Grid>
);

export default CategoryItem;
