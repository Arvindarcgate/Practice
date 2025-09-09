
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Form from './Pages/Form';   
import Product from './Pages/Product';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path = "/products" element = {< Product/>} />
      </Routes>
    </Router>
  );
};

export default App;


