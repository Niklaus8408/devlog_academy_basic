import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import {Course} from './components/Courses/Course';
import Teacher from './components/Teacher/Teacher';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themeContext } from './context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
      style={{
        background: darkMode? 'black': '',
        color: darkMode? 'white': ''
      }}
    >
      <Navbar/>
      <Intro/>
      <About/>
      <Course/>
      <Teacher/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
