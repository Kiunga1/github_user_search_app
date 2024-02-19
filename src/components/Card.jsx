/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Bitmap from '../assets/images/bitmap.png'
import Twitter from '../assets/images/icon-twitter.svg'
import Website from '../assets/images/icon-website.svg'
import Location from '../assets/images/icon-location.svg'
import Company from '../assets/images/icon-company.svg'


const Card = ({githubUser}) => {
  //Check if githubUser is preesent
  if (!githubUser) {
    return (
      <div className='flex flex-col w-full p-6 bg-white dark:bg-[#1E2A47] shadow rounded gap-5 '>
      <div className='flex gap-5'>
        <span className='w-[20%]'>
          <img className='rounded-full w-30 h-30' src={Bitmap} alt="Bitmap Image" />
        </span>
        <div className='w-[80%] flex flex-col gap-1 lg:flex-row lg:justify-between items-start text-left'>
          <div className='flex flex-col gap-1'>
          <h1 className='text-primaryBlack font-bold dark:text-white '>
            The Octocat
          </h1>
            <h3 className='text-primaryBlue'>@octocat</h3>
          </div>
          <h4 className='text-gray-100 text-sm dark:text-white'>Joined 25 Jan 2011</h4>
        </div>
      </div>
      <div className='flex justify-end'>
        <p className='text-gray-200 text-xs md:w-[80%] p-0 m-0 text-left dark:text-white'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </p>
      </div>
      <div className='flex flex-col gap-4 mt-8 lg:w-[80%] w-full self-end'>
        <div className='flex justify-between bg-[#F6F8FF] dark:bg-primaryBlack rounded p-3'>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-xs text-gray-200 dark:text-white'>Repo</h4>
            <p className='font-bold text-black dark:text-white'>8</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-xs text-gray-200 dark:text-white'>Following</h4>
            <p className='font-bold text-black dark:text-white'>3808</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-xs text-gray-200 dark:text-white'>Followers</h4>
            <p className='font-bold text-black dark:text-white'>2808</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-4 grids-cols-1 mt-5'>
          <div className='flex gap-3 items-center'>
            <span><img src={Location} alt="map icon"/></span>
            <p className='text-gray-200 text-bold text-xs dark:text-white'>San Francisco</p>
          </div>
          <div className='flex gap-3 items-center'>
            <span><img src={Twitter} alt="twitter icon"/></span>
            <p className='text-gray-200 text-bold text-xs'>Not Available</p>
          </div>
          <div className='flex gap-3 items-center'>
            <span><img src={Website} alt="website icon"/></span>
            <p className='text-gray-200 text-bold text-xs dark:text-white'>https://github.blog</p>
          </div>
          <div className='flex gap-3 items-center'>
            <span><img src={Company} alt="github icon"/></span>
            <p className='text-gray-200 text-bold text-xs dark:text-white'>@github</p>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className='flex flex-col w-full p-6 bg-white dark:bg-[#1E2A47] shadow rounded gap-5 '>
      <div className='flex gap-5'>
        <span className='w-[20%]'>
          <img className='rounded-full w-30 h-30' src={githubUser?.avatar_url} alt="Bitmap Image" />
        </span>
        <div className='w-[80%] flex flex-col gap-1 lg:flex-row lg:justify-between items-start text-left'>
          <div className='flex flex-col gap-1'>
          <h1 className='text-primaryBlack font-bold dark:text-white '>
            {githubUser?.name}
          </h1>
            <h3 className='text-primaryBlue'>@{githubUser?.login}</h3>
          </div>
          <h4 className='text-gray-100 text-sm dark:text-white'>Joined 25 Jan 2011</h4>
        </div>
      </div>
      <div className='flex justify-end'>
        <p className='text-gray-200 text-xs md:w-[80%] p-0 m-0 text-left dark:text-white'>
        {githubUser?.bio}
        </p>
      </div>
      <div className='flex flex-col gap-4 mt-8 lg:w-[80%] w-full self-end'>
        <div className='flex justify-between bg-[#F6F8FF] dark:bg-primaryBlack rounded p-3'>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-xs text-gray-200 dark:text-white'>Repo</h4>
            <p className='font-bold text-black dark:text-white'>{githubUser?.public_repos}</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-xs text-gray-200 dark:text-white'>Following</h4>
            <p className='font-bold text-black dark:text-white'>{githubUser?.following}</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-xs text-gray-200 dark:text-white'>Followers</h4>
            <p className='font-bold text-black dark:text-white'>{githubUser?.followers}</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-4 grids-cols-1 mt-5'>
          <div className='flex gap-3 items-center'>
            <span><img src={Location} alt="map icon"/></span>
            <p className='text-gray-200 text-bold text-xs dark:text-white'>{githubUser?.location}</p>
          </div>
          <div className='flex gap-3 items-center'>
            <span><img src={Twitter} alt="twitter icon"/></span>
            <p className='text-gray-200 text-bold text-xs dark:text-white'>{githubUser?.twitter_username}</p>
          </div>
          <div className='flex gap-3 items-center'>
            <span><img src={Website} alt="website icon"/></span>
            <p className='text-gray-200 text-bold text-xs dark:text-white'>{githubUser?.blog}</p>
          </div>
          <div className='flex gap-3 items-center'>
            <span><img src={Company} alt="github icon"/></span>
            <p className='text-gray-200 text-bold text-xs dark:text-white'>{githubUser?.company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
