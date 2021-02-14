import React from 'react';
import styled from 'styled-components';

function ListUser({ title, body, userId, id }) {
  return (
    <Card>
      <Header>{userId}</Header>
      <Title>{title}</Title>
      <PostBody>{body}</PostBody>
      <Tags>
        <Link href="!#">Comments</Link>
        <Link href="!#">Likes</Link>
      </Tags>
    </Card>
  );
}

export default ListUser;

export const Card = styled.article`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 300px;
  width: 490px;
  min-width: 300px;
  padding: 1rem;
  border-radius: 16px;
  transform-style: preserve-3d;
  perspective: 500px;
  backdrop-filter: blur(10px);
  background: linear-gradient(rgba(126, 116, 123, 0.3), rgba(94, 37, 99, 0.2));
  box-shadow: -0.1rem 0 1rem #000;
  transition: 0.4s all ease-in-out;
  z-index: 20;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 400px;
    padding: 1rem 0;
    margin: 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    transform: rotateY(2deg);
    z-index: 10;
    background: linear-gradient(#1f66a8, #5e2563);
  }

  &:after {
    content: '';
    width: 340px;
    height: 340px;
    position: absolute;
    bottom: -50%;
    right: -30%;
    background-color: rgba(245, 75, 8, 0.25);
    border-radius: 50%;
    z-index: -1;
  }
  &:before {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    top: 100px;
    left: 1px;
    background-color: rgba(213, 248, 17, 0.1);
    border-radius: 50%;
    z-index: -1;
  }
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 10%;
  height: 50px;
  top: 5px;
  right: 10px;
  font-size: 3rem;
  color: rgba(197, 204, 204, 0.171);
`;

export const Title = styled.h4`
  font-size: 1.3rem;
  margin: auto 1rem;
  color: rgba(255, 255, 255, 0.856);
`;
export const PostBody = styled.h6`
  font-size: 1.1rem;
  margin: auto 1rem;
  padding: 0rem 1rem;
  color: rgba(255, 255, 255, 0.521);
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  line-height: 2;
  background-color: transparent;
  opacity: 0;
  transition: 0.3s all ease-in-out;
  ${Card}:hover & {
    opacity: 1;
  }
  &:hover {
    color: #b9b9e9;
    background-clip: text;
    border-color: rgb(75, 228, 233);
  }
`;
export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8rem;
  color: #b9b9e9;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 1px solid #4296b8;
  border-radius: 2rem;
  padding: 0.3rem 0.4rem;
  position: relative;
  max-width: 40%;
  transition: hover 0.2s ease-in-out;
  &:hover {
    color: #cfcfe0;
    transform: translateY(-2px);
  }
`;
