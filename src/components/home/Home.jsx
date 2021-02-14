import React, { useState } from 'react';
import { UserProvider } from '../../context/userContext';
import styled from 'styled-components';

import { PageForm, useRequest, Posts } from '../../components';
function Home() {
  const [page, setPage] = useState(1);
  const { posts, loading, error } = useRequest(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
  );

  return (
    <div className="app-body">
      <Title>Blogs</Title>
      <Line />
      <UserProvider value={{ posts, error, loading }}>
        <PageForm setPage={setPage} posts={posts} />
        {loading ? <h3>Loading ... </h3> : <Posts />}
        {error && <div>{error}</div>}
      </UserProvider>
    </div>
  );
}

export default Home;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  color: #fdfdfd;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 3rem;
  padding: 1rem 0;
  margin-bottom: 0.1rem;
  margin-top: 3rem;
  z-index: 20;

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;

export const Line = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  padding: 0;
  height: 0.2rem;
  background-color: rgba(165, 167, 182, 0.96);
  width: 13%;
`;
