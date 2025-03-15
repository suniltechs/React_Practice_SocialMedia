import React, { useContext } from 'react'
import Feed from './Feed'
import DataContexts from '../contexts/DataContext'

const Home = () => {
  const {posts,searchResult,fetchError,isLoading} = useContext(DataContexts)
  return (
   <main className='Home'>
   {isLoading && <p>Loading Posts...</p>}
   {!isLoading && fetchError && <p>Server Error Please Try Again Later...</p>}
   {!fetchError && !isLoading && (posts.length ? <Feed posts={searchResult} /> : !isLoading && <p>No posts to display.</p>)}
   </main>
  )
}

export default Home