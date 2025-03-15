import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContexts from '../contexts/DataContext';

const Postpage = () => {
  const { posts, handleDelete } = useContext(DataContexts)
  const { id } = useParams();
  /* console.log(id) */
  const post = posts.find(post => post.id.toString() === (id));
 /*  console.log(post) */

  return (
    <main className='PostPage'>
      <article className='post'>
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.date}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className='editButton'>Edit Post</button>
            </Link>
            <button className='deleteButton' onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        ) : (
          <>
            <p>Page Not Found</p>
            <p>Check Our <Link to="/">Home Page</Link></p>
          </>
        )}
      </article>
    </main>
  )
}

export default Postpage;
