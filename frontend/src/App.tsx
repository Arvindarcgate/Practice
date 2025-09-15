
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Form from './pages/Form';
import Product from './pages/Product';
import Login from './Login';
import Singnup from './Singnup';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singnup" element={<Singnup />} />
      </Routes>
    </Router>
  );
};

export default App;
