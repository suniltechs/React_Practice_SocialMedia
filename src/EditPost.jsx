import { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContexts from '../contexts/DataContext'

const EditPost = () => {
  const { posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody } = useContext(DataContexts)
  const { id } = useParams()
  
  const post = posts.find(post => String(post.id) === String(id));

  useEffect(() => {
    if (post) {  
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      handleEdit(post.id);
    }
  };

  return (
    <main className='NewPost'>
      {post ? (
        <>
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor='editTitle'>Title:</label>
            <input
              type='text'
              value={editTitle}
              required
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor='editPost'>Post:</label> {/* Fixed label typo */}
            <textarea
              value={editBody}
              required
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button type='submit'>Submit</button>
          </form>
        </>
      ) : (
        <>
          <p>Sorry, the post you are trying to edit does not exist.</p>
          <p>Check our <a href='/'>Home Page</a></p>
        </>
      )}
    </main>
  );
}

export default EditPost;
