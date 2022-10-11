import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' exact element={<App/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/gallery' element={<App/>}/>
    </Routes>
  </Router>,

  document.getElementById('root'))
;