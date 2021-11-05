import { FC } from 'react';

import { CssBaseline } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { indigo, blueGrey, orange, red, green } from '@mui/material/colors';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: indigo,
      secondary: blueGrey,
      info: {
        main: blueGrey[900]
      },
      warning: {
        main: orange[500]
      },
      error: {
        main: red[500]
      },
      success: {
        main: green[500]
      }
    }
  })
);

const CustomTheme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default CustomTheme;