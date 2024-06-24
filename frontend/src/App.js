
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
