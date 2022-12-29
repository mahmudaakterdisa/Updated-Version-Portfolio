import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Header/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import css from './Child/child.css'
import Header from './Pages/Header/Header';
import ScrollTopTop from './ScrollTopTop';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div>

      <div className='navbarIndex'><Navbar></Navbar></div>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
