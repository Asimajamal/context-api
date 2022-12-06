import React from 'react'
import Movies from './Movies'
import Search from './Search'
// import { useGlobalContext } from './context';
// import { useContext } from 'react';
const Home = () => {
    // const name=  useContext(AppContext);

  return (
    <div>
     <Search/>
     <Movies/>
    </div>
  )
}

export default Home
