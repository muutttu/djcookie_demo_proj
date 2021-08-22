import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Footer from './components/Footer';


const theme = createTheme({
  palette: {
    background: {
      default: '#fffefe'
    }
  }
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
