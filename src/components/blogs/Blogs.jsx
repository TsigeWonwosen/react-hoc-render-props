import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { userContext } from '../../context/userContext';
import ListUser from '../home/ListUser';
import styled from 'styled-components';
import { PageForm, Loading } from '../../components';

function Blogs({ featured }) {
  const { posts, error, loading } = useContext(userContext);

  if (error) return <h2> {error}</h2>;

  if (loading) return <Loading />;
  let Posts = featured ? posts.filter((post) => post.featured === true) : posts;
  return (
    <ContainerPosts featured={featured}>
      <Title id="posts">{featured ? 'Featured Blogs' : 'All Blogs'}</Title>
      <Line />
      {!featured && <PageForm posts={posts} />}
      <CardContainer>
        <WrapperPosts>
          {Posts.map((post) => (
            <ListUser key={post._id} {...post} />
          ))}
        </WrapperPosts>
      </CardContainer>
      {featured && <Button to="blogs">All Blogs</Button>}
    </ContainerPosts>
  );
}

export default Blogs;

export const ContainerPosts = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: ${({ featured }) => (!featured ? '4rem' : '0rem')};
  background-image: radial-gradient(90deg, #5c0067 0%, #00d4ff 100%);
`;

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
  margin-top: 3rem;
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

const Button = styled(Link)`
  max-width: 100px;
  padding: 10px 14px;
  margin: 1rem 0rem 4rem;
  background-color: transparent;
  border: 1px solid #fca311;
  color: #fca311;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #fca311;
  }
`;
