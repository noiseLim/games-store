import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons';
import { Button, Typography } from '@mui/material';
import { ICard } from '../../../types/Card';

import './cardGame.scss';

const CardGame: FC<ICard> = ({ alt, name, image, price, platform }) => {
  const defaultImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png';

  return (
    <div className='card-game'>
      <div className='card-game__icons'>
        {platform?.pc && <FontAwesomeIcon icon={faWindows} size='1x' />}
        {platform?.xbox && <FontAwesomeIcon icon={faXbox} size='1x' />}
        {platform?.playstation && <FontAwesomeIcon icon={faPlaystation} size='1x' />}
      </div>
      <div className='card-game__image-wrapper'>
        <img className='card-game__img' src={image || defaultImage} alt={alt} />
      </div>
      <div className='card-game__info'>
        <Typography variant='body2' className='card-game__title'>
          {name}
        </Typography>
        <div className='card-game__price-wrapper'>
          <Button variant='outlined' size='small'>
            Add To Cart
          </Button>
          <Typography variant='body2' className='card-game__price'>
            {price}$
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
