import React from 'react';

import styled from 'styled-components';
import { Head, About, Service, Card, Blogs } from '../../components';

function Home() {
  return (
    <ContainerPosts>
      <Head />
      <About />
      <Service />
      <Blogs featured />
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
