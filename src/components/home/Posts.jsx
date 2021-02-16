import React, { useContext } from 'react';
import { userContext } from '../../context/userContext';
import ListUser from './ListUser';

import styled from 'styled-components';

function Posts() {
  const { posts, error } = useContext(userContext);
  if (error) return <h2> {error}</h2>;
  return (
    <CardContainer>
      <WrapperPosts>
        {posts.map((post) => (
          <ListUser key={post._id} {...post} />
        ))}
      </WrapperPosts>
    </CardContainer>
  );
}

export default Posts;

export const WrapperPosts = styled.section`
  display: grid;
  justify-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin: 0 auto;
  border-bottom: box-sizing;
  background-color: transparent;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
  padding: 3rem 0;

  overflow-x: hidden;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2.3rem 0;
    padding: 0rem;
    margin: 0;
    outline: none;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const CardContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  font-family: 'DM Mono', monospace;
`;
