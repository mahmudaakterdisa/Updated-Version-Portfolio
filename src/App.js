import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import Navbar from './Pages/Header/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import css from './Child/child.css'
import Header from './Pages/Header/Header';
function App() {
  return (
    <div className='container-particles'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
