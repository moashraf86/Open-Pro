import React from 'react';
import '../app.css';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className='bg-black-500 py-4'>
      <div className='container max-w-7xl'>
        <Navbar />
      </div>     
    </header>
  )
}
