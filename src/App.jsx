 
import React, {useState} from 'react'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experience from './components/mainpage/Experience';
import Lux from './components/mainpage/Luxury';
import ZigZag from './components/mainpage/ZigZag'
import Prod from './components/mainpage/Products';
import Comments from './components/mainpage/Comments';
import Touch from './components/mainpage/Touch'
import Mind from './components/mainpage/Mind';
import Footer from './components//Footer';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About  from "./components/pages/About";
import  Home from "./components/pages/Home";
import {Toggle} from "./components/Toggle";
import OrderNow from './components/pages/OrderNow';
import ExploreBeans from './components/pages/ExploreBeans';
import ContactUs from './components/pages/ContactUs';
import Blogs from './components/pages/Blogs'; 
function App() {
return (
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/order_now" element={<OrderNow />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/explore_our_beans" element={<ExploreBeans />} />
          <Route path="/blogs" element={<Blogs />} />
          </Routes>

  )
}

export default App