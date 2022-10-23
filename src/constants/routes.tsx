import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ErrorPage from '../pages/ErrorPage';
import NotFoundPage from '../pages/NotFoundPage';

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}

const routes: RouteObject[] = [
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'category/:platforms',
    element: <ProductsPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
];

export default routes;
