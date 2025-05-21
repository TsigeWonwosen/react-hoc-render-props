import { useContext } from "react";

import { userContext } from "../../context/userContext";
import ListUser from "../home/ListUser";
import { PageForm, Loading } from "../../components";
import {
  ContainerPosts,
  Title,
  Line,
  WrapperPosts,
  Button,
} from "./Blogs.styled";

function Blogs({ featured }) {
  const { posts, error, loading } = useContext(userContext);

  if (error) return <h2> {error}</h2>;

  if (loading) return <Loading />;
  let Posts = featured ? posts.filter((post) => post.id < 4) : posts;

  return (
    <ContainerPosts featured={featured}>
      <Title id="posts">{featured ? "Featured Blogs" : "All Blogs"}</Title>
      <Line />
      {!featured && <PageForm posts={posts} />}
      <WrapperPosts>
        {Posts.map((post) => (
          <ListUser
            key={post.id}
            {...post}
          />
        ))}
      </WrapperPosts>
      {featured && <Button to="blogs">See All Blogs</Button>}
    </ContainerPosts>
  );
}

export default Blogs;
