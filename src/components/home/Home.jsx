import React, { useContext } from 'react';

import styled from 'styled-components';
import { userContext } from '../../context/userContext';
import { PageForm, Posts, Head, About, Service, Card } from '../../components';
function Home() {
  const { posts, error, loading } = useContext(userContext);
  return (
    <ContainerPosts>
      <Head />
      <About />
      <Service />
      <Title id="posts">Blogs</Title>
      <Line />
      <PageForm posts={posts} />
      {loading ? <h3>Loading ... </h3> : <Posts />}
      {error && <div>{error}</div>}
      <Card />
    </ContainerPosts>
  );
}

export default Home;

export const ContainerPosts = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background-image: radial-gradient(90deg, #5c0067 0%, #00d4ff 100%);
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
