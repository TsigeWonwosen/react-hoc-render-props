import React, { useContext } from 'react';

import styled from 'styled-components';
import { userContext } from '../../context/userContext';
import { Head, About, Service, Card, Loading, Posts } from '../../components';

function Home() {
  const { error, loading } = useContext(userContext);
  return (
    <ContainerPosts>
      <Head />
      <About />
      <Service />
      {loading ? <Loading /> : <Posts />}
      {error && <div>{error}</div>}
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
