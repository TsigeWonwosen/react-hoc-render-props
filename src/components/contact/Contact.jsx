import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

function Contact() {
  return (
    <Wrapper>
      <Title>Under Construction!</Title>
      <Line />
      <Button to="/">Back To Home</Button>
    </Wrapper>
  );
}

export default Contact;

export const Wrapper = styled.div`
  min-height: 89vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
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
