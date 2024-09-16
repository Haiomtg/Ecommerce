import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logIn" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
