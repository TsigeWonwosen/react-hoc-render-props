import React, { useContext } from 'react';

import styled from 'styled-components';
import { userContext } from '../../context/userContext';
import { PageForm,  Posts } from '../../components';
function Home() {
  // const [page, setPage] = useState(1);
  const { posts, error, loading } = useContext(userContext);
  return (
    <div className="app-body">
      <ContainerPosts id="posts">
        <Title>Blogs</Title>
        <Line />

        <PageForm posts={posts} />
        {loading ? <h3>Loading ... </h3> : <Posts />}
        {error && <div>{error}</div>}
      </ContainerPosts>
    </div>
  );
}

export default Home;

export const ContainerPosts = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0rem 3rem;
  text-align: left;
  background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%);
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #fdfdfd;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 3rem;
  padding: 1rem 0;
  margin-bottom: 0.1rem;
  margin-top: 1rem;
  z-index: 20;

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;

export const Line = styled.div`
  margin: 2rem auto 2rem;
  padding: 0;
  height: 0.4rem;
  background-color: rgba(165, 167, 182, 0.96);
  width: 150px;
  text-align: center;
  border-radius: 15px;
`;
