import React, { useContext } from 'react';

import { userContext } from '../../context/userContext';
import ListUser from '../home/ListUser';
import { PageForm, Loading } from '../../components';
import {ContainerPosts,Title,Line,CardContainer,WrapperPosts,Button } from './Blogs.styled'

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
      {featured && <Button to="blogs">See All Blogs</Button>}
    </ContainerPosts>
  );
}

export default Blogs;

