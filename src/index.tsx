import { ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

import './styles/style.scss';

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </ThemeProvider>
);
