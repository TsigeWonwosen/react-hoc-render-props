import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
  Wrapper,
  Content,
  ImageSingle,
  Body,
  Button,
  PublishAt,
  Title,
  BlogInfo,
} from './Blog.styled';

import { userContext } from '../../context/userContext';

function Blog() {
  const { posts, error, loading } = useContext(userContext);
  let { id } = useParams();

  if (error) return <div>Error Loading</div>;
  if (loading) return <div>Loading ...</div>;

  const SinglePost = posts.filter((post) => post._id === id);

  console.log(SinglePost);
  if (SinglePost.length === 0) {
    return <h2>Loading ....</h2>;
  }
  const {
    name,
    email,
    title,
    content,
    published_at,
    image: { url },
  } = SinglePost[0];
  let newPublishedAt = moment(published_at).format('MMM-Do-YYYY');
  return (
    <Wrapper>
      <Content>
        <ImageSingle src={url} alt={name} />

        <Button to="/">Back to Home</Button>

        <BlogInfo>
          <Title> {title}</Title>
          <PublishAt>
            Published: {newPublishedAt} | {email}{' '}
          </PublishAt>
        </BlogInfo>

        <Body>
          <ReactMarkdown source={content} />
        </Body>
      </Content>
    </Wrapper>
  );
}

export default Blog;
