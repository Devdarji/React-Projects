// import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import AppContext from './AppContext';
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
import GlobalStyles from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';


function App() {


  // const darkMode = useDarkMode(true);
  return (
    // <AppContext.Provider value={{ darkMode }}>
    <AppContext.Provider>
      <ThemeProvider >
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
     


    </AppContext.Provider>
  );
}

export default App;
