import React, { useContext } from 'react'
import DataContexts from '../contexts/DataContext'

const Newpost = () => {
  const {postTitle,setPostTitle,postBody,setPostBody,handleSubmit} = useContext(DataContexts)
  return (
    <main className='NewPost'>
      <h2>Add New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input 
        id='postTitle'
        type="text" 
        value={postTitle}
        required
        onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="">Post:</label>
        <textarea 
        id='postBody'
        type='text'
        value={postBody}
        required
        onChange={(e)=>setPostBody(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Newpost