import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contacto from './components/Navbar/Pages/Contacto';
import Home from './components/Navbar/Pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/contacto' exact Component={Contacto}/>
        </Routes>
    </Router>
  );
}

export default App;
