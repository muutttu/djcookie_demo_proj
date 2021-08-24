import { createTheme, ThemeProvider } from '@material-ui/core';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Footer from './components/Footer';


const theme = createTheme({
  /* Site wide custom theme CSS here */
  palette: {
    background: {
      default: '#fefefe',
    },
  },
  typography: {
    fontFamily: 'OpenSans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </ThemeProvider >
  );
}

export default App;
