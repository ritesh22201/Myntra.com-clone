import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import Footer from './Components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarTwo } from './Components/NavbarTwo';
import { useEffect, useLayoutEffect } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const loginToken = JSON.parse(localStorage.getItem('google-login')) || {};
  const isBagRoute = location.pathname.includes("/cart");
  const isAddress = location.pathname.includes("/address")
  const isPayment = location.pathname.includes("/payment")
  const isLoggedIn = location.pathname.includes("/login");
  const path = localStorage.getItem('path') || '';

  useEffect(() => {
    localStorage.setItem('path', location.pathname);
  }, [location.pathname !== '/login']);

  useEffect(() => {
    if (location.pathname !== '/login') {
      localStorage.setItem('path', location.pathname);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && loginToken?.token) {
      navigate(path);
    }
  }, [loginToken, location.pathname, path])

  return (
    <div className="App">
      {isBagRoute || isAddress || isPayment ? <NavbarTwo /> : <Navbar />}
      <MainRoutes />
      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;
