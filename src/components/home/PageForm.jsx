import React from 'react';
import { SinglePaginationItem, Container, Button } from './PageForm.styled';

function PageForm({ posts }) {
  const Pagination = () => {
    let singlePag;
    if (posts.length > 0) {
      singlePag = posts.map((post, index) => (
        <SinglePaginationItem key={index}>
          <Button to={`/blogs/${post._id}`}> {index + 1}</Button>
        </SinglePaginationItem>
      ));
    }
    return <>{singlePag}</>;
  };

  return <Container>{Pagination()}</Container>;
}

export default PageForm;
