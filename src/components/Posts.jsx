import React, { useContext } from 'react';
import { userContext } from '../context/userContext';
import ListUser from './ListUser';

function Posts() {
  const { posts, error } = useContext(userContext);
  if (error) return <h2> {error}</h2>;
  return (
    <div className="post">
      <ul>
        {posts.map((post) => (
          <ListUser key={post.id} {...post} />
        ))}
      </ul>
    </div>
  );
}

export default Posts;
