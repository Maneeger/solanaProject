import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
    <nav className="flex justify-between items-center p-5 bg-gray-800">
      <div className="logo  w-24 h-10 bg-white"></div>
      <div className="right w-4xl p-7 flex justify-between gap-3.5 bg-amber-800 items-center">   
        <ul className="flex gap-6 list-none">   
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