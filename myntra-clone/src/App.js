import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import  Footer  from './Components/Footer';
import { useLocation } from 'react-router-dom';
import { NavbarTwo } from './Components/NavbarTwo';

function App() {
  const location = useLocation();
  const isBagRoute = location.pathname.includes("/cart");
  const isAddress = location.pathname.includes("/address")
  const isPayment = location.pathname.includes("/payment")
  return (
    <div className="App">
      {isBagRoute || isAddress  || isPayment  ? <NavbarTwo /> : <Navbar />}
      <MainRoutes />
      {location.pathname !== '/login' && <Footer/>}
    </div>
  );
}

export default App;
