import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPage from './pages/ForgotPage';
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MenuList from './pages/MenuList';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };

  return (
    <Router>
      <div className="main-div">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/menuList" element={<MenuList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
