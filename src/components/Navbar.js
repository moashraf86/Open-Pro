import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import '../app.css';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between text-slate-500'>
      <Logo />
      <ul className='flex items-center justify-between gap-5'>
        <li className='inline-flex'>
          <Link to='/features' className='text-slate-200 hover:text-white'>Features</Link>
        </li>
        <li>
          <Link to='/pricing' className='text-slate-200 hover:text-white'>Pricing</Link>
        </li>
        <li>
          <Link to='/blog' className='text-slate-200 hover:text-white'>Blog</Link>
        </li>
        <li>
          <Link to='/about-us' className='text-slate-200 hover:text-white'>About us</Link>
        </li>
      </ul>
      <ul className='flex items-center justify-between gap-5'>
        <li className='inline-flex'>
          <a href='#' className='block text-indigo-400 hover:text-white font-inter'>Sign in</a>
        </li>
        <li className='inline-flex'>
          <a href='#' className='block py-2 px-4 rounded-sm text-white bg-indigo-400 hover:bg-indigo-600'>Sign up</a>
        </li>
      </ul>
    </nav>
  )
}
