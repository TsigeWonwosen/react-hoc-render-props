import React from 'react';
import styled from 'styled-components';

import OfficePic from '../../img/office.jpg';

function Service() {
  return (
    <Wrapper>
      <Content>
        <Title>Service</Title>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
          doloribus sapiente. Explicabo, fugit expedita perspiciatis sint
          consectetur libero nulla sed placeat odit dolor quos autem
          consequuntur, quia, inventore accusamus rem?
        </Paragraph>
      </Content>
    </Wrapper>
  );
}

export default Service;

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 2rem 0rem 4rem;
  @media (max-width: 900px) {
    margin: 1rem 0rem 2rem;
  }
`;
export const Content = styled.section`
  background-image: url(${OfficePic});
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  position: relative;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(39, 39, 95, 0.47);
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  color: #fdfdfd;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 4rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 3px solid #e0e1e6;
  z-index: 20;

  @media (max-width: 900px) {
    margin-bottom: 1.2rem;
    margin-top: 1rem;
  }
`;
export const Paragraph = styled.p`
  max-width: 70%;
  color: #d9d9df;
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.7rem;
  z-index: 20;

  @media (max-width: 900px) {
    max-width: 99%;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
`;
