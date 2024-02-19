/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import axios from 'axios';



const App = () => {
  const [githubUser, setGithubUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGithubUser = async (user) => {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.github.com/users/${user}`,{
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })
  //Handle the response here
    const data = await response.data
    console.log(data)
    setLoading(false)
    setGithubUser(data)
    
    } catch (err) {
  //Handle error
  console.log(err)
  setError(new Error('No results'));

    }
  };



  return (
    <div className=' font-spaceMono w-100 min-h-screen bg-[#F6F8FF] dark:bg-primaryBlack '>
      <div className='text-center lg:w-[40%] md:w-[50%] w-[90%] m-auto mt-5 flex flex-col gap-5'>
      <Header/>
      <SearchBar getGithubUser = {getGithubUser}/>
      <Card githubUser = {githubUser}/>
      </div>
    </div>
  )
}

export default App
