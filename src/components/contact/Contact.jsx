import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

function Contact() {
  return (
    <Wrapper>
      <h2>Under Construction!</h2>
      <Link to="/">Back To Home</Link>
    </Wrapper>
  );
}

export default Contact;

export const Wrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;
