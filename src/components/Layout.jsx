import React, { useState, useEffect } from 'react'; 
import { AiOutlineArrowUp } from 'react-icons/ai';
import Navbar from "./Navbar";
import Button from '@mui/material/Button';
import Footer from "./Footer";
import { Toggle } from "./Toggle";
import '../App.css';

const Layout = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        setVisible(scrolled > 300);
    }; 
    
    const scrollToTop = () => { 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
    }; 

    const handleDarkModeToggle = () => {
        setIsDark(!isDark);
    };

    // Save dark mode preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('darkMode', isDark);
    }, [isDark]);

    useEffect(() => {
        const handleOverflow = () => {
            const navbarMenu = document.querySelector('.navbar__menu.active');
            document.body.style.overflow = navbarMenu ? 'hidden' : 'auto';
        };

        handleOverflow();

        const observer = new MutationObserver(handleOverflow);
        observer.observe(document.body, { attributes: true, subtree: true });

        window.addEventListener('scroll', toggleVisible);
        window.addEventListener('resize', toggleVisible);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', toggleVisible);
            window.removeEventListener('resize', toggleVisible);
        };
    }, []);

  return (
    <div className='container' data-theme={isDark ? "dark":"light"}>
<Navbar  />
<Toggle is checked={isDark} handleChange={handleDarkModeToggle}/>
      {children}
    <div className="ttt" style={{ display: visible ? 'block' : 'none' }}>
    <Button>
              <AiOutlineArrowUp style={{ fontSize: '250%', color:'white' }} onClick={scrollToTop} />
            </Button>
        </div>
    <Footer/>
    </div>
  )
}

export default Layout
