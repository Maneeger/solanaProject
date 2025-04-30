
'use client'
// import React from 'react'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  
  // Effect hook to add and remove the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const offset = window.scrollY;
      console.log('Scroll offset:', offset);
      // Define the scroll threshold (e.g., 100 pixels)
      const scrollThreshold = 100; 
      if (offset > scrollThreshold) {
        if (!scrolled) {
          setScrolled(true);
          // --- DEBUGGING LOG: Log when state is set to true ---
          console.log('Setting scrolled to TRUE');
        }

      } else {
        if(scrolled){
        setScrolled(false);}
        console.log('Setting scrolled to FALSE')
      }
    };
   
     // Add the event listener when the component mounts
     console.log('Adding scroll event listener'); // DEBUGGING LOG
     
 
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      console.log('Removing scroll event listener'); 
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  return (
    <div>
    <nav className={`flex justify-between items-center p-0 md:p-5  bg-gray-800 
    fixed top-0 w-full z-50 transition-colors duration-300
     ${scrolled ? 'bg-red-800 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="logo  w-24 h-10 bg-white"></div>
        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white md:hidden"
        >
          ☰
        </button>
      <div className="right w-4xl p-7 flex justify-between gap-3.5 bg-amber-800 items-center">   
        <ul className={`md:flex md:items-center md:gap-6   ${isOpen ? "block" : "hidden"} list-none md:block`}>   
          <li>
            <Link href="/" className="text-white font-bold hover:text-gray-400">
              Products
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white font-bold hover:text-gray-400">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white font-bold hover:text-gray-400">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white font-bold hover:text-gray-400">
              About
            </Link>
          </li>
        </ul>
        <aside className='auth flex gap-4'>
       <Link  href ="/auth" className='text-white font-bold hover:text-gray-400 p-2 border-2'> Get started</Link>
       <Link href="/dashboard" className='text-white font-bold hover:text-gray-400 p-2 border-2'>Dashboard</Link>
        </aside>
      </div>
    </nav>
  </div>
  )
}

export default Navbar