import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './pages/home/home';
import About from './pages/about/about';

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
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
