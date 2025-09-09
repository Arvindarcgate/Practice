
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Form from './Pages/Form';   
import Product from './Pages/Product';
import Login from '../../../Ecommerce/frontend/src/Login';
import Singnup from '../../../Ecommerce/frontend/src/Singnup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path = "/products" element = {< Product/>} />
        <Route path = "/login" element = {< Login/>} />
        <Route path = "/singnup" element = { < Singnup />} />
      </Routes>
    </Router>
  );
};

export default App;


