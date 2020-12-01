import React from "react";
import { UserConsumer } from "../context/userContext";
import ListUser from "./ListUser";

function Posts() {
  return (
    <div className='post'>
      <UserConsumer>
        {({ posts, error }) => {
          if (error) <h2> {error}</h2>;
          return (
            <ul>
              {posts.map((post) => (
                <ListUser key={post.id} {...post} />
              ))}
            </ul>
          );
        }}
      </UserConsumer>
    </div>
  );
}

export default Posts;
