import { FC } from 'react';
import './homePage.scss';
import logo from '../../assets/images/logo.svg';

interface HomePage {}

const HomePage: FC<HomePage> = () => {
  return (
    <div className='main'>
      <h1>React Template - {process.env.NODE_ENV}</h1>
      <img src={logo} alt='react logo' className='main__logo' />
    </div>
  );
};

export default HomePage;
