/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import searchIcon from '../assets/images/icon-search.svg'
import { ThemeContext } from '../context/ThemeContextProvider'


const SearchBar = ({ getGithubUser, error }) => {
  const {theme} = useContext(ThemeContext)
  const [query, setQuery] = useState('')

  const handleSubmit =() => {
    if (!query){
      alert('Field is required')
    }else{
      getGithubUser(query)
      setQuery('')
    }
  }
  return (
    <div className='bg-white dark:bg-[#1E2A47] dark:text-white flex justify-between items-center px-3 py-2 shadow rounded-md'>
      <div className='flex gap-2'>
        <img src={searchIcon} alt="Search icon" className='w-6 h-6' />
        <input value={query} onChange={(e) => setQuery(e.target.value)} className='border-0 outline-none placeholder:text-gray-200  placeholder:text-xs bg-transparent' type="text" placeholder='Search Github username....' />
      </div>
      <div>
      {error && <span className='text-red-500 dark:text-red-400'>{error}</span>}
        <button onClick={handleSubmit} className='px-4 py-3 flex justify-center items-center text-white bg-primaryBlue rounded-md hover:bg-[#60ABFF] text-sm'>Submit</button>
      </div>
    </div>
  )
}

export default SearchBar
