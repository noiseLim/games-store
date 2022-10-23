import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          fontSize: 12,
          padding: '0 20px',
          height: 40,
          '&:hover': {
            backgroundColor: '#4A4D53',
          },
        },
      },
    },
  },
});

export default theme;
