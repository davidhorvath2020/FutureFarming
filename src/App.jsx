import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from './Pages/Home';
import Crops from './Pages/Crops/Crops';
import CropsDetails from './Pages/Crops/CropsDetails';
import Login from './Pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Crops' element={<Crops />} />
          <Route path='/Crops/:id' element={<CropsDetails />} />  
          
          <Route path='/Login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
