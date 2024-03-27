import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './pages/home/home';
import About from './pages/about/about';
import Login from './pages/login/login';

//components
import NavBar from './components/navBar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} >home</Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
