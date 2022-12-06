import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query , setQuery,isError}=useGlobalContext();
  return (
    <div className='search-container'>
      <h2>Search Movie App</h2>
      <div className='search'>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Search...' onChange={(e)=>setQuery(e.target.value)} value={query} />
      </form>

      </div>
      <div className='errorMsg'>{isError.show && isError.msg}</div>
    </div>
  )
}

export default Search
