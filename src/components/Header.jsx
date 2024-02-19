/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';

import { ThemeContext } from '../context/ThemeContextProvider';

const Header = () => {
  const {theme, themeToggler} = useContext(ThemeContext);
 
  return (
    <div className='w-full flex justify-between items-center dark:bg-primaryBlack'>
      <h1 className='text-[#222731] font-bold font-spaceMono text-2xl dark:text-white'>devFinder</h1>
      <div className='flex items-center justify-center gap-2'>
        <h4 className='font-spaceMono text-gray-100 text-xs uppercase dark:text-white'>
          {theme === 'light' ? 'Dark' : 'light'}
        </h4>
        <span onClick={themeToggler}>
           {theme === 'light' ? (<img className='w-5 h-5' src={Moon} alt="moon icon"/>) : (<img className='w-5 h-5 ' src={Sun} alt="Sun icon"/>)} 
        </span>
      </div>
    </div>
  )
}

export default Header
