import React from 'react';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import Footer from './Footer';
import Navbarr from './Navbar/Navbarr';
import {BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbarr/>
  
    <Routes>
       <Route  path='/'element={<Home/>}/>
       <Route  path='/about'element={<About/>}/>
       <Route   path='/contact'element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

