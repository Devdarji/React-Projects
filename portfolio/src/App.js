// import { ThemeProvider } from 'react-bootstrap';
import './App.css';
// import AppContext from './AppContext';
// import useDarkMode from 'use-dark-mode';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Contact from './components/Contact';
// import About from './components/About';
// import Projects from './components/Projects';
// import Testimonials from './components/Testimonials';
// import NavBar from './components/Navbar';
// import { lightTheme, darkTheme } from './theme/Theme'
import {BrowserRouter} from 'react-router-dom';
import MainApp from './MainApp';
// import GlobalStyles from './theme/GlobalStyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  orange } from '@mui/material/colors';
// import NavBarWithRouter from './components/NavBar';

function App() {


  const outerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });


  // const { isDarkMode, toggle, enable, disable } = useDarkMode()
  return (
    // <AppContext.Provider value={{ darkMode }}>
    // <AppContext.Provider>
    // <ThemeProvider theme={isDarkMode ? 'dark' : 'light'}>

    <ThemeProvider theme={outerTheme}>
      {/* <GlobalStyles /> */}
      <div className="App">
        
        <BrowserRouter>
          <MainApp />
  
        </BrowserRouter>
      </div>

    </ThemeProvider>
       
      // </ThemeProvider>
     


    // </AppContext.Provider>

    // <div>
    //   <h2>Project Working FIne</h2>
    // </div>
  );
}

export default App;
