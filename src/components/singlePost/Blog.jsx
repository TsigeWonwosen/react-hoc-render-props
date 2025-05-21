import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import moment from "moment";
import sampleImage from "../../img/screen-post-.jpg";

import {
  Wrapper,
  Content,
  ImageSingle,
  Body,
  Button,
  PublishAt,
  Title,
  BlogInfo,
} from "./Blog.styled";

import { userContext } from "../../context/userContext";

import { Loading } from "../../components";

function Blog() {
  const { posts, error, loading } = useContext(userContext);
  let { id } = useParams();

  if (error) return <div>Error Loading</div>;
  if (loading) return <Loading />;

  const SinglePost = posts.filter((post) => post.id === parseInt(id));

  if (SinglePost.length === 0) {
    return <Loading />;
  }
  const { name, email, title, content, published_at, image } = SinglePost[0];
  let newPublishedAt = moment(published_at).format("MMM-Do-YYYY");
  return (
    <Wrapper>
      <Content>
        <ImageSingle
          src={sampleImage}
          alt={name}
        />
        <Button to="/blogs">Back to Blogs</Button>
        <BlogInfo>
          <Title> {title}</Title>
          <PublishAt>
            Published: {newPublishedAt} | {email}{" "}
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
