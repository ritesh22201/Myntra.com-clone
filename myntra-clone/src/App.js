import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import Footer from './Components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarTwo } from './Components/NavbarTwo';
import { useEffect, useLayoutEffect } from 'react';
import { getProfile } from './Redux/profileReducer/action';
import { useDispatch } from 'react-redux';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const loginToken = JSON.parse(localStorage.getItem('google-login')) || {};
  const isBagRoute = location.pathname.includes("/cart");
  const isAddress = location.pathname.includes("/address")
  const isPayment = location.pathname.includes("/payment")
  const isLoggedIn = location.pathname.includes("/login");
  const path = localStorage.getItem('path') || '';
  const dispatch = useDispatch();

  useEffect(() => {
    if(location.pathname !== '/login'){
      localStorage.setItem('path', location.pathname);
    }
  }, [location.pathname]);

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

  useEffect(() => {
    dispatch(getProfile());
    window.scrollTo({ top: 0, left: 0 });
}, [])

  return (
    <div className="App">
      {isBagRoute || isAddress || isPayment ? <NavbarTwo /> : <Navbar />}
      <MainRoutes />
      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;
