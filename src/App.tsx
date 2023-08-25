import { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import 'typeface-pt-sans'


function App() {
  const [theme, setTheme] = useState(false)
  const darkTheme = createTheme({
    spacing: 1,
    palette: {
      mode: theme ? 'dark' : 'light', 
      primary: {
        main: '#4361EE'
      },
      secondary: {
        main: '#F46036',
      },
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Fragment>
        <CssBaseline />
        <Notifications />
        <HotKeys />
        <SW />
        <BrowserRouter>
          {/* <Header />
          <Sidebar /> */}
          <Pages />
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
    
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
