import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    
    <div>
      <Header />
      <Routes>
        <Route path='/HeroSection' element= {<HeroSection/>} />
        <Route path='/Contact' element= {<Contact/>} />
        <Route path='/Login' element= {<Login/>} />
        <Route path='/Signup' element= {<Signup/>} />
      </Routes>
      <Footer/>
    </div>
  
  );
}

export default App;
