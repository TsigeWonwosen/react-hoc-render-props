import React from 'react';
import { SinglePaginationItem, Container } from './PageForm.styled';

function PageForm({ setPage, posts }) {
  const Pagination = () => {
    let singlePag;
    if (posts.length > 0) {
      singlePag = posts.map((post, index) => (
        <SinglePaginationItem onClick={() => setPage(index)} key={index}>
          {index + 1}
        </SinglePaginationItem>
      ));
    }
    return <>{singlePag}</>;
  };

  return <Container>{Pagination()}</Container>;
}

export default PageForm;
