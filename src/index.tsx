import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

import './styles/style.scss';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>
);
