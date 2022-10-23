import { faXbox, faWindows, faPlaystation } from '@fortawesome/free-brands-svg-icons';

export const pcRoute = 'category/pc';
export const xboxRoute = 'category/xbox';
export const playstationRoute = 'category/playstation';

export const playstation = 'playstation';
export const xbox = 'xbox';
export const pc = 'pc';

const category = [
  {
    title: 'PC',
    link: pcRoute,
    icon: faWindows,
  },
  {
    title: 'Xbox Series X|S',
    link: xboxRoute,
    icon: faXbox,
  },
  {
    title: 'Play Station 5',
    link: playstationRoute,
    icon: faPlaystation,
  },
];

export default category;
