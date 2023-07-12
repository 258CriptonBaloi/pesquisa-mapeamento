import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contacto from './components/Pages/Contacto';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Pages/Login';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/contacto' exact Component={Contacto}/>
          <Route path='/login' exact Component={Login}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
