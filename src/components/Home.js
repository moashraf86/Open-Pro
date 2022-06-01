import React from 'react';
import heroImage from '../images/hero-image.jpg';

export class Home extends React.Component {
  render() {
    return (
      <main className='pt-24 bg-black-500'>
        {/* Home Section */}
        <section id='Home' className=''>
          <div className='container max-w-7xl'> 
            {/* Intro text*/}
            <div className='text-center md:max-w-3xl m-auto'>
              <h1 className='text-2xl leading-7 sm:text-[40px]  md:text-[52px] sm:leading-[50px] text-slate-200 font-extrabold mb-5 md:mb-10'>Landing template for startups</h1>
              <p className='text-lg sm:text-xl text-slate-600 mb-5 md:mb-10'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <ul className='flex items-center justify-center gap-7 mb-10 md:mb-16'>
                <li className='inline-flex'>
                  <a href='#' className='py-3 px-7 bg-indigo-400 hover:bg-indigo-600 text-white font-medium rounded-sm'>Start free trial</a>
                </li>
                <li className='inline-flex'>
                  <a href='#' className='py-3 px-7 bg-gray-700  hover:bg-gray-800 text-white font-medium rounded-sm'>Learn more</a>
                </li>
              </ul>
            </div>
            {/* Intro Video */}
            <div className='relative'>
              <img src={heroImage} className="w-full"></img>
              <div id='play-icon' className='absolute top-[50%] left-[50%] -ml-8 -mt-8 cursor-pointer'>
                <svg class="w-20 h-20" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a"> <stop stop-color="#EBF1F5" stop-opacity=".8" offset="0%"></stop> <stop stop-color="#EBF1F5" offset="100%"></stop> </linearGradient> </defs> <circle fill="url(#a)" cx="44" cy="44" r="44"></circle> <path class="ae text-purple-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"></path> </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}