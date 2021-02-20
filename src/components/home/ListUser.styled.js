import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 400px;
  width: 490px;
  min-width: 300px;
  border-radius: 16px;
  transform-style: preserve-3d;
  perspective: 500px;
  backdrop-filter: blur(10px);
  background: linear-gradient(150deg, #39ef74, #4600f1 100%);
  box-shadow: -0.1rem 0 1rem #000;
  transition: 0.4s all ease-in-out;
  z-index: 20;
  padding: 0;
  padding-bottom: 1rem;
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
export const Image = styled.img`
  width: 100%;
  height: 45%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  position: center;
  margin: 0;
`;

export const ArticleInfo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

export const Date = styled.h6`
  font-size: 0.8rem;
  color: rgba(197, 204, 204, 0.685);
`;
export const Header = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 0.8rem;
  color: rgba(197, 204, 204, 0.521);
`;
export const BodyContainer = styled.section`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const Body = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: auto;
`;

export const Title = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.856);
`;
export const PostBody = styled.h6`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.521);
`;

export const Tags = styled.div`
  width: 100%;
  height: 10%;
  margin: 0.7rem 0;
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
export const LinkTo = styled(Link)`
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
