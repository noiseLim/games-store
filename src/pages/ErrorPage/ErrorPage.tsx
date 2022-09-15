import React, { FC } from 'react';
import { AlertTitle, Alert, Button } from '@mui/material';
import './errorPage.scss';

const ErrorPage: FC = () => {
  const onReloadPage = () => window.location.reload();

  return (
    <div className='error-message'>
      <Alert severity='error' className='error-message__title'>
        <AlertTitle>
          <strong>Oh-no! Something went wrong</strong>
        </AlertTitle>
        You can refresh the page or try again later.
        <br />
        <Button
          sx={{
            marginTop: '10px',
          }}
          variant='outlined'
          color='error'
          value='Reload Page'
          onClick={onReloadPage}
        >
          Reload the page
        </Button>
      </Alert>
    </div>
  );
};

export default ErrorPage;
