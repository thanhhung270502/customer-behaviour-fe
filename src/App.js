import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Introduction } from './pages/Introduction';
import { Checker } from './pages/Checker';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#011126',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <Introduction/>
      <Checker/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
