import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//firebase imports
import { onAuthStateChanged } from 'firebase/auth';

//context import
import { AuthProvider } from './context/authcontext';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthernticate';

//pages
import Home from './pages/home/home';
import About from './pages/about/about';
import Login from './pages/login/login';

//components
import NavBar from './components/navBar';
import Footer from './components/footer';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { set } from 'firebase/database';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  if (loadingUser) {
    return <p>Loading...</p>
  }


  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} >home</Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
