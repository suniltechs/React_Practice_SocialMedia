import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContexts from '../contexts/DataContext'
const Nav = () => {
  const { search, setSearch } = useContext(DataContexts)
  return (
    <nav className='Nav'>
      <form className='searchForm ' onClick={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          autoFocus
          placeholder='Search'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/newpost'>NewPost</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav