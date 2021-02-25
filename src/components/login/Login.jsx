import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
function Login() {
  return (
    <Wrapper>
      <Title>Under Construction</Title>
      <Line />
      <Button to="/">Go To Home</Button>
    </Wrapper>
  );
}

export default Login;

export const Wrapper = styled.div`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: clamp(2.4rem, -0.875rem + 8vw, 3rem);
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  text-transform: capitalize;
  color: #0b7cfa;
`;

export const Line = styled.div`
  margin: 2rem auto 2rem;
  padding: 0;
  height: 0.4rem;
  background-color: #f4743b;
  width: 100px;
  text-align: center;
  border-radius: 15px;
`;

export const Button = styled(Link)`
  max-width: 300px;
  width: 150px;
  padding: 10px 1rem;
  margin: 1rem 0rem 4rem;
  background-color: transparent;
  border: 3px solid #f4743b;
  color: #f4743b;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #f4743b;
  }

  @media (max-width: 900px) {
    margin: 3rem 0rem 3rem;
  }
`;
