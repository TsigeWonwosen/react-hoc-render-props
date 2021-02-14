import React, { useState } from 'react';
import { UserProvider } from '../../context/userContext';

import { PageForm, useRequest, Posts } from '../../components';
function Home() {
  const [page, setPage] = useState(1);
  const { posts, loading, error } = useRequest(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
  );

  return (
    <div className="app-body">
      <UserProvider value={{ posts, error, loading }}>
        <PageForm setPage={setPage} posts={posts} />
        {loading ? <h3>Loading ... </h3> : <Posts />}
        {error && <div>{error}</div>}
      </UserProvider>
    </div>
  );
}

export default Home;
